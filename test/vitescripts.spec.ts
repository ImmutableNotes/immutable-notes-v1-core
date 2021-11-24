require('dotenv').config();

import { expect } from 'chai';
import { wallet } from '@vite/vitejs';
import { callContract, callOffChain, connection, CONTRACT, receiveTransaction, subscribeToEvent } from './vitescripts';

const pause = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const viteTokenId = 'tti_5649544520544f4b454e6e40';
const zeroHash = '0'.repeat(64);
const randomString = 'Loream ipsum ' + Math.random().toString().substr(2);

const seed = process.env.SEED;

if (typeof seed !== 'string') {
  throw new Error('No SEED in .env');
}

const accountA = wallet.getWallet(seed).deriveAddress(0); // vite_c5bd133eb95cfb614a0008714442386e6413337ec70a520f84
const accountB = wallet.getWallet(seed).deriveAddress(1); // vite_2cec20499638d1e522768a69796288622410060af8bf76eeca
// receiveTransaction(accountA);

describe('getOwner', () => {
  it('should get owner of the contract', async () => {
    const owner = await callOffChain('getOwner');
    expect(owner![0]).to.equal('vite_f30697191707a723c70d0652ab80304195e5928dcf71fcab99');
  });
});

describe(`updating bio, recording a note, tipping it, and reading the author's new timeline/stats`, () => {
  let stats: any[] | null;
  let noteHash = '';
  it(`should get an accountA' timeline stats`, async () => {
    stats = await callOffChain('getTimelineStats', [accountA.address, [viteTokenId]]);
    expect(stats).to.be.an('Array');
    expect(stats![0]).to.be.a('String');
    expect(+stats![1]).to.be.a('Number');
    expect(stats![2]).to.be.a('Array');
    expect(+stats![2][0]).to.be.a('Number');
  });
  it(`should update accountA's bio`, async () => {
    await callContract(accountA, 'updateBio', CONTRACT.abi, [randomString]);
    await pause(); // wait for changes on-chain to propagate
    const newStats = await callOffChain('getTimelineStats', [accountA.address, []]);
    const newBio = newStats![0];
    expect(newBio).to.not.equal(stats![0]);
    expect(newBio).to.equal(randomString);
    stats = newStats;
  });
  it(`should record accountA's note and increment its totalNotes`, async () => {
    await subscribeToEvent(CONTRACT.address, 'NewNote', ([key, timestamp, noteText, author, relatedNoteHash]) => {
      expect(parseInt(key, 16)).to.be.a('Number'); // e.g. 'c2086a81672814b82823f716e958c713eade3f8a8bd294e90ed0ba2ea625fcff'
      expect(+timestamp).to.be.greaterThan(0); // e.g. '1637608833'
      expect(noteText).to.equal(randomString); // e.g. 'Loream ipsum 1859219172745079'
      expect(author).to.equal(accountA.address); // e.g. 'vite_c5bd133eb95cfb614a0008714442386e6413337ec70a520f84'
      expect(parseInt(relatedNoteHash, 16)).to.be.a('Number'); // e.g. '0000000000000000000000000000000000000000000000000000000000000000'
    });
    const sendBlock = await callContract(accountA, 'recordNote', CONTRACT.abi, [randomString, zeroHash]);
    noteHash = sendBlock.hash;
    await pause(); // higher quota transactions take longer to propagate?
    const newStats = await callOffChain('getTimelineStats', [accountA.address, []]);
    expect(+newStats![1]).to.equal(+stats![1] + 1);
    stats = newStats;
  });
  it(`should get accountA's last note`, async () => {
    const note = await callOffChain('getNoteByHash', [noteHash, [viteTokenId]]);
    expect(note![0]).equal(accountA.address); // author
    expect(+note![1]).to.be.greaterThan(0); // timestamp
    expect(note![2]).to.equal(randomString); // text
    expect(+note![3]![0]).to.equal(0); // tipsCount
    expect(note![4]).to.equal(zeroHash); // relatedNoteHash
    // const newStats = await callOffChain('getNoteByTimeline', [accountA.address, []]);
  });
  after(() => {
    // Makes Mocha exit
    // https://stackoverflow.com/questions/50372866/mocha-not-exiting-after-test
    connection.destroy();
  });
});

// describe('recordNote, getNoteByHash, getTimelineStats, getNoteByTimeline, getTotalNotes', () => {

// });

// setTimeout(() => {
//   connection.destroy();
// }, 3000); // arbitrary amount of time to let all tests run. What is there a better way?

// getNoteByHash
// getNoteByTimeline
// getTimelineStats
// getOwner
// getTotalNotes

// updateBio
// recordNote
// updateRelatedNoteHash
// tipNote
// tipTimeline
// requestNoteByTimeline
// requestTimelineStats
// changeOwner
