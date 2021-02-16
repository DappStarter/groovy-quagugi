require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name reward stereo coconut install deputy equal giggle'; 
let testAccounts = [
"0xec01a484a2bc1b3ada6058972e302d068f1d60d905b115edaf2bea890f9e3004",
"0xf94844cb6af00bfb78fce99dbf431ff2c339b9c4b4fd1fae6b60750dbf009b25",
"0xc80f27c26484fbc7988933967f2de748de3609bc9cf704f686bab3e651ec1c22",
"0xd2b6beb56a875c0e0863a56742935382588aaf0f61ed2a48d9fa06b53327b112",
"0xacb11930d7174ff243a06f458a44cf3ce36328b304b3fb36d39ea802fbd8cccb",
"0x1579ed9fa1d122a5c8807e569290997dc09a9efe0a66d6e2219e537202ee67e4",
"0xf07f43232216387aebb7540887c4f3455a5068355cc85bb3588ff1e1d87e5133",
"0xb6984df651c4df1a8ca12e7203390881a2f7e811f771d08123863c3ab58b6238",
"0x0eeea7412369c684edee3100ea745a3450ce83fca81fbeef640dfdec51e2dfd4",
"0xaa27f64640352f59e47726648c0c1bcf215457f3d48c55629b680c6e54665198"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
