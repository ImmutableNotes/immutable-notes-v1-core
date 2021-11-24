// fork of https://gist.github.com/weserickson/06ecac6cdd2e26fddf1a2ec3cd7d3613#file-test-js

import { WS_RPC } from '@vite/vitejs-ws';
import { ViteAPI, abi, accountBlock } from '@vite/vitejs';
import { AddressObj } from '@vite/vitejs/distSrc/wallet/type';
import { AccountBlockType } from '@vite/vitejs/distSrc/utils/type';

// const providerURL = 'wss://node-tokyo.vite.net/ws'; // mainnet
const providerURL = 'wss://buidl.vite.net/gvite/ws'; // testnet
// const providerURL = 'ws://localhost:23457'; // local debug node
export const connection = new WS_RPC(providerURL);

const provider = new ViteAPI(connection, () => {});

export const CONTRACT = {
  binary:
    '6080604052600060015534801561001557600080fd5b50336000806101000a81548174ffffffffffffffffffffffffffffffffffffffffff021916908374ffffffffffffffffffffffffffffffffffffffffff1602179055506113cd806100676000396000f3fe60806040526004361061008d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062f2bfed146100ea5780631162f2581461011857806319300245146101c9578063217248a01461027057806332ed46da146102b55780636d9cd2ce14610307578063a920a59914610397578063af5f8e2a146103dc575b6000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff164669ffffffffffffffffffff163460405160405180820390838587f25050505050005b6101166004803603602081101561010057600080fd5b8101908080359060200190929190505050610462565b005b34801561012457600080fd5b506101c76004803603606081101561013b57600080fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561018357600080fd5b82018360208201111561019557600080fd5b803590602001918460208302840111640100000000831117156101b757600080fd5b9091929391929390505050610624565b005b3480156101d557600080fd5b5061026e600480360360408110156101ec57600080fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561022a57600080fd5b82018360208201111561023c57600080fd5b8035906020019184602083028401116401000000008311171561025e57600080fd5b90919293919293905050506107ad565b005b6102b36004803603602081101561028657600080fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff16906020019092919050505061091c565b005b3480156102c157600080fd5b50610305600480360360208110156102d857600080fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a22565b005b34801561031357600080fd5b506103956004803603604081101561032a57600080fd5b810190808035906020019064010000000081111561034757600080fd5b82018360208201111561035957600080fd5b8035906020019184600183028401116401000000008311171561037b57600080fd5b909192939192939080359060200190929190505050610b21565b005b3480156103a357600080fd5b506103da600480360360408110156103ba57600080fd5b810190808035906020019092919080359060200190929190505050610db8565b005b3480156103e857600080fd5b50610460600480360360208110156103ff57600080fd5b810190808035906020019064010000000081111561041c57600080fd5b82018360208201111561042e57600080fd5b8035906020019184600183028401116401000000008311171561045057600080fd5b9091929391929390505050610e7e565b005b60006002600083815260200190815260200160002190508060030160009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff163374ffffffffffffffffffffffffffffffffffffffffff16141580156104dc5750600034115b15156104e757600080fd5b8060030160009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff164669ffffffffffffffffffff163460405160405180820390838587f25050505050348160040160004669ffffffffffffffffffff1669ffffffffffffffffffff1681526020019081526020016000216000828254019250508190555034600360008360030160009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002160030160004669ffffffffffffffffffff1669ffffffffffffffffffff168152602001908152602001600021600082825401925050819055505050565b600080606080600061067889888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050508a610ed6565b9450945094509450945033635d66618b86868686866040518663ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808681526020018581526020018060200180602001848152602001838103835286818151815260200191508051906020019080838360005b8381101561070e5780820151818401526020810190506106f3565b50505050905090810190601f16801561073b5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019060200280838360005b8381101561077757808201518184015260208101905061075c565b50505050905001975050505050505050604051808203906000692445f6e5cde8c2c70e4486f29250505050505050505050505050565b6060600060606107fe86868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050506110c9565b92509250925033638d70c4118484846040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808060200184815260200180602001838103835286818151815260200191508051906020019080838360005b83811015610882578082015181840152602081019050610867565b50505050905090810190601f1680156108af5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019060200280838360005b838110156108eb5780820151818401526020810190506108d0565b5050505090500195505050505050604051808203906000692445f6e5cde8c2c70e4486f29250505050505050505050565b60003411801561095a57508074ffffffffffffffffffffffffffffffffffffffffff163374ffffffffffffffffffffffffffffffffffffffffff1614155b151561096557600080fd5b8074ffffffffffffffffffffffffffffffffffffffffff164669ffffffffffffffffffff163460405160405180820390838587f250505050506000600360008374ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000219050348160030160004669ffffffffffffffffffff1669ffffffffffffffffffff168152602001908152602001600021600082825401925050819055505050565b6000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff163374ffffffffffffffffffffffffffffffffffffffffff16148015610ad157506000809054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168174ffffffffffffffffffffffffffffffffffffffffff1614155b1515610adc57600080fd5b806000806101000a81548174ffffffffffffffffffffffffffffffffffffffffff021916908374ffffffffffffffffffffffffffffffffffffffffff16021790555050565b60016000815480929190600101919050555060004990506000429050600060010283141515610b71576000600260008581526020019081526020016000216001015414151515610b7057600080fd5b5b60a06040519081016040528083815260200182815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081526020013374ffffffffffffffffffffffffffffffffffffffffff168152602001848152506002600084815260200190815260200160002160008201518160000155602082015181600101556040820151816002019080519060200190610c3792919061127c565b5060608201518160030160006101000a81548174ffffffffffffffffffffffffffffffffffffffffff021916908374ffffffffffffffffffffffffffffffffffffffffff160217905550608082015181600501559050506000600360003374ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff168152602001908152602001600021905082816002016000836000016000815480929190600101919050558152602001908152602001600021819055507f805d9dd169c89f2c4767762e6c0ceaad929e4d07a87fc75e6bd5576b5be6f2ee83838888338960405180878152602001868152602001806020018474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925080828437600081840152601f19601f82011690508083019250505097505050505050505060405180910390a1505050505050565b60006002600084815260200190815260200160002190508060030160009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff163374ffffffffffffffffffffffffffffffffffffffffff16148015610e315750818314155b1515610e3c57600080fd5b600060010282141515610e70576000600260008481526020019081526020016000216001015414151515610e6f57600080fd5b5b818160050181905550505050565b8181600360003374ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000216001019190610ed19291906112fc565b505050565b600080606080600080600360008a74ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002190506000600260008360020160008b8152602001908152602001600021548152602001908152602001600021905060608951604051908082528060200260200182016040528015610f805781602001602082028038833980820191505090505b50905060008090505b8a51811015611000578260040160008c83815181101515610fa657fe5b9060200190602002015169ffffffffffffffffffff1669ffffffffffffffffffff168152602001908152602001600021548282815181101515610fe557fe5b90602001906020020181815250508080600101915050610f89565b508160000154826001015483600201838560050154828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110aa5780601f1061107f576101008083540402835291602001916110aa565b820191906000526020600021905b81548152906001019060200180831161108d57829003601f168201915b5050505050925097509750975097509750505050939792965093509350565b6060600060606000600360008774ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000219050606085516040519080825280602002602001820160405280156111465781602001602082028038833980820191505090505b50905060008090505b86518110156111c657826003016000888381518110151561116c57fe5b9060200190602002015169ffffffffffffffffffff1669ffffffffffffffffffff1681526020019081526020016000215482828151811015156111ab57fe5b9060200190602002018181525050808060010191505061114f565b5081600101826000015482828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112665780601f1061123b57610100808354040283529160200191611266565b820191906000526020600021905b81548152906001019060200180831161124957829003601f168201915b5050505050925094509450945050509250925092565b828054600181600116156101000203166002900490600052602060002190601f016020900481019282601f106112bd57805160ff19168380011785556112eb565b828001600101855582156112eb579182015b828111156112ea5782518255916020019190600101906112cf565b5b5090506112f8919061137c565b5090565b828054600181600116156101000203166002900490600052602060002190601f016020900481019282601f1061133d57803560ff191683800117855561136b565b8280016001018555821561136b579182015b8281111561136a57823582559160200191906001019061134f565b5b509050611378919061137c565b5090565b61139e91905b8082111561139a576000816000905550600101611382565b5090565b9056fea165627a7a72305820c171cc46553afcfa9818b43963258af7dcc0fe34ef93f3a77e96b382bd90096d0029',
  // prettier-ignore
  abi: [{"constant":false,"inputs":[{"name":"noteHash","type":"bytes32"}],"name":"tipNote","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"author","type":"address"},{"name":"index","type":"uint256"},{"name":"tokenIds","type":"tokenId[]"}],"name":"requestNoteByTimeline","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"author","type":"address"},{"name":"tokenIds","type":"tokenId[]"}],"name":"requestTimelineStats","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"author","type":"address"}],"name":"tipTimeline","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"offchain"},{"constant":true,"inputs":[{"name":"noteHash","type":"bytes32"},{"name":"tokenIds","type":"tokenId[]"}],"name":"getNoteByHash","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"offchain"},{"constant":false,"inputs":[{"name":"noteText","type":"string"},{"name":"relatedNoteHash","type":"bytes32"}],"name":"recordNote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"noteHash","type":"bytes32"},{"name":"relatedNoteHash","type":"bytes32"}],"name":"updateRelatedNoteHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"bio","type":"string"}],"name":"updateBio","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"author","type":"address"},{"name":"tokenIds","type":"tokenId[]"}],"name":"getTimelineStats","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"offchain"},{"constant":true,"inputs":[],"name":"getTotalNotes","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"offchain"},{"constant":true,"inputs":[{"name":"author","type":"address"},{"name":"tokenIds","type":"tokenId[]"},{"name":"index","type":"uint256"}],"name":"getNoteByTimeline","outputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"offchain"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"inputs":[{"indexed":false,"name":"","type":"bytes32"},{"indexed":false,"name":"","type":"uint256"},{"indexed":false,"name":"","type":"string"},{"indexed":false,"name":"","type":"uint256[]"},{"indexed":false,"name":"","type":"bytes32"}],"name":"noteByTimelineData","type":"message"},{"inputs":[{"indexed":false,"name":"","type":"address"},{"indexed":false,"name":"","type":"uint256"},{"indexed":false,"name":"","type":"string"},{"indexed":false,"name":"","type":"uint256[]"},{"indexed":false,"name":"","type":"bytes32"}],"name":"noteByHashData","type":"message"},{"inputs":[{"indexed":false,"name":"","type":"string"},{"indexed":false,"name":"","type":"uint256"},{"indexed":false,"name":"","type":"uint256[]"}],"name":"timelineStats","type":"message"},{"inputs":[{"indexed":false,"name":"","type":"address"}],"name":"ownerData","type":"message"},{"inputs":[{"indexed":false,"name":"","type":"uint256"}],"name":"totalNotesData","type":"message"},{"anonymous":false,"inputs":[{"indexed":false,"name":"","type":"bytes32"},{"indexed":false,"name":"","type":"uint256"},{"indexed":false,"name":"","type":"string"},{"indexed":false,"name":"","type":"address"},{"indexed":false,"name":"","type":"bytes32"}],"name":"NewNote","type":"event"}],
  offChain:
    '608060405260043610610071576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680635c6cfcbe146100735780636d9184e4146100bf578063cefaec961461025a578063d670992a146103c4578063f12d90f1146103e257610071565b005b61007b610574565b604051808274ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61014a600480360360408110156100d65760006000fd5b810190808035600019169060200190929190803590602001906401000000008111156101025760006000fd5b8201836020820111156101155760006000fd5b803590602001918460208302840111640100000000831117156101385760006000fd5b909192939090919293905050506105a4565b604051808674ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff16815260200185815260200180602001806020018460001916600019168152602001838103835286818151815260200191508051906020019080838360005b838110156101d75780820151818401525b6020810190506101bb565b50505050905090810190601f1680156102045780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019060200280838360005b838110156102415780820151818401525b602081019050610225565b5050505090500197505050505050505060405180910390f35b6102f8600480360360408110156102715760006000fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156102b05760006000fd5b8201836020820111156102c35760006000fd5b803590602001918460208302840111640100000000831117156102e65760006000fd5b9091929390909192939050505061079a565b604051808060200184815260200180602001838103835286818151815260200191508051906020019080838360005b838110156103435780820151818401525b602081019050610327565b50505050905090810190601f1680156103705780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019060200280838360005b838110156103ad5780820151818401525b602081019050610391565b505050509050019550505050505060405180910390f35b6103cc610805565b6040518082815260200191505060405180910390f35b61048a600480360360608110156103f95760006000fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156104385760006000fd5b82018360208201111561044b5760006000fd5b8035906020019184602083028401116401000000008311171561046e5760006000fd5b9091929390909192939080359060200190929190505050610817565b60405180866000191660001916815260200185815260200180602001806020018460001916600019168152602001838103835286818151815260200191508051906020019080838360005b838110156104f15780820151818401525b6020810190506104d5565b50505050905090810190601f16801561051e5780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019060200280838360005b8381101561055b5780820151818401525b60208101905061053f565b5050505090500197505050505050505060405180910390f35b6000600060009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff1690506105a1565b90565b600060006060606060006000600260005060008a6000191660001916815260200190815260200160002160005090506060888890506040519080825280602002602001820160405280156106075781602001602082028038833980820191505090505b5090506000600090505b898990508110156106a1578260040160005060008b8b84818110151561063357fe5b90509090602002013569ffffffffffffffffffff1669ffffffffffffffffffff1669ffffffffffffffffffff16815260200190815260200160002160005054828281518110151561068057fe5b906020019060200201909081815260200150505b8080600101915050610611565b508160030160009054906101000a900474ffffffffffffffffffffffffffffffffffffffffff16826001016000505483600201600050838560050160005054828054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107755780601f1061074a57610100808354040283529160200191610775565b820191906000526020600021905b81548152906001019060200180831161075857829003601f168201915b5050505050925096509650965096509650505061078f5650505b939792965093509350565b6060600060606107f186868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061088d63ffffffff16565b9250925092506107fc565b93509350939050565b60006001600050549050610814565b90565b6000600060606060600061087389898980806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505088610a6063ffffffff16565b94509450945094509450610882565b945094509450945094565b6060600060606000600360005060008774ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000216000509050606085516040519080825280602002602001820160405280156109105781602001602082028038833980820191505090505b5090506000600090505b865181101561099d57826003016000506000888381518110151561093a57fe5b9060200190602002015169ffffffffffffffffffff1669ffffffffffffffffffff16815260200190815260200160002160005054828281518110151561097c57fe5b906020019060200201909081815260200150505b808060010191505061091a565b5081600101600050826000016000505482828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a435780601f10610a1857610100808354040283529160200191610a43565b820191906000526020600021905b815481529060010190602001808311610a2657829003601f168201915b505050505092509450945094505050610a595650505b9250925092565b600060006060606060006000600360005060008a74ffffffffffffffffffffffffffffffffffffffffff1674ffffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002160005090506000600260005060008360020160005060008b81526020019081526020016000216000505460001916600019168152602001908152602001600021600050905060608951604051908082528060200260200182016040528015610b275781602001602082028038833980820191505090505b5090506000600090505b8a51811015610bb4578260040160005060008c83815181101515610b5157fe5b9060200190602002015169ffffffffffffffffffff1669ffffffffffffffffffff168152602001908152602001600021600050548282815181101515610b9357fe5b906020019060200201909081815260200150505b8080600101915050610b31565b508160000160005054826001016000505483600201600050838560050160005054828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c6a5780601f10610c3f57610100808354040283529160200191610c6a565b820191906000526020600021905b815481529060010190602001808311610c4d57829003601f168201915b5050505050925097509750975097509750505050610c86565050505b93979296509350935056fea165627a7a72305820c171cc46553afcfa9818b43963258af7dcc0fe34ef93f3a77e96b382bd90096d0029',
  // address: 'vite_99be0b35adc94fe8e334dd8a36786d18aef466e877112f704c', //mainnet
  address: 'vite_6d38703a05690b8e6a850c684ec5739bd33329aa8d918b3aee', // testnet
  // address: 'vite_cf225e5209d3ddfcd3ce00695cb7817bdae43b69bfb18a21e8', // debug
};

// export const  sendTx=async(account: AddressObj, address: string, amount: string) {
//   const ab = accountBlock
//     .createAccountBlock('send', {
//       address: account.address,
//       toAddress: address,
//       amount,
//     })
//     .setProvider(provider)
//     .setPrivateKey(account.privateKey);
//   await ab.autoSetPreviousAccountBlock();
//   const result = await ab.sign().send();
//   console.log('send success', result);
// }

export const receiveTransaction = async (account: AddressObj) => {
  // get the first unreceived tx

  const data = await provider.request('ledger_getUnreceivedBlocksByAddress', account.address, 0, 1);
  if (!data || !data.length) {
    console.log('[LOG] No Unreceived Blocks');
    return;
  }

  // create a receive tx
  const ab = accountBlock
    .createAccountBlock('receive', {
      address: account.address,
      sendBlockHash: data[0].hash,
    })
    .setProvider(provider)
    .setPrivateKey(account.privateKey);

  await ab.autoSetPreviousAccountBlock();
  const result = await ab.sign().send();
  console.log('receive success', result);
};

export const callContract = async (
  account: AddressObj,
  methodName: string,
  abi: Object[],
  params: any[],
  amount = '0'
): Promise<AccountBlockType> => {
  const block = accountBlock
    .createAccountBlock('callContract', {
      address: account.address,
      abi,
      methodName,
      amount,
      toAddress: CONTRACT.address,
      params,
    })
    .setProvider(provider)
    .setPrivateKey(account.privateKey);

  await block.autoSetPreviousAccountBlock();
  return block.sign().send();
};

type SubscriptionResponse = {
  vmlog: {
    topics: any[];
    data: string;
  };
  accountBlockHash: string;
  accountBlockHeight: string;
  address: string;
  removed: boolean;
};

export const subscribeToEvent = async (
  address: string,
  eventName: string,
  callback: (values: any[], response: any[]) => void = () => {}
) => {
  const filterParameters = {
    addressHeightRange: { [address]: { fromHeight: '0', toHeight: '0' } },
  };

  const subscription = await provider.subscribe('createVmlogSubscription', filterParameters);
  const sig = abi.encodeLogSignature(CONTRACT.abi, eventName);
  subscription.callback = (res: SubscriptionResponse[]) => {
    if (sig === res[0].vmlog.topics[0]) {
      const data = Buffer.from(res[0].vmlog.data, 'base64').toString('hex');
      const log = abi.decodeLog(CONTRACT.abi, data, sig, eventName);
      // console.log('event detected', log);
      callback(Object.values(log), res);
    }
  };
  // console.log('subscribe success', { eventName });
  return subscription;
};

// from https://github.com/weserickson/vite-staking-pools/blob/master/test.js
export const callOffChain = (methodName: string, params?: any[]): Promise<any[] | string[] | null> => {
  const ehex = abi.encodeFunctionCall(CONTRACT.abi, params, methodName);
  const ebase64 = Buffer.from(ehex, 'hex').toString('base64');
  const code = Buffer.from(CONTRACT.offChain, 'hex').toString('base64');
  return provider
    .request('contract_callOffChainMethod', {
      address: CONTRACT.address,
      code,
      data: ebase64,
    })
    .then((res: string) => {
      const hexbuf = Buffer.from(res, 'base64').toString('hex');
      const { outputs = [] } = CONTRACT.abi.find((x) => x.name === methodName) || {};
      return abi.decodeParameters(outputs, hexbuf);
    });
};
