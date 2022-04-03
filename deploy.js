const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'usage knife visual useless pulse vicious option shop item add bar damage',
  'https://ropsten.infura.io/v3/099c40ecf4df4f389b3f0d478272ba04'
);

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();

  console.log('Attepmting to deploy from account ', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(abi))
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send( { gas: '1000000', from: accounts[0]})

    console.log('Contract deployed to ', result.options.address);
    provider.engine.stop();
}

deploy()
