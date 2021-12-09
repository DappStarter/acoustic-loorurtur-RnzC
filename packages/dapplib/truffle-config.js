require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember mistake hunt neck frame trophy'; 
let testAccounts = [
"0x36200e423a2a04012bce37735a9844125f8fc1795526f32acb3a1f0e7cf60df3",
"0x0daf9a1ccaa8e0b13f45cc92b3b87b33900bbc3d288eae26156c493d8009d7c1",
"0xcf0496b9d87f8e7a622402c903074505f18052fcd0e272137138af86113733f8",
"0x0e6cd56640f7568d0dbf1aa14e66f2f77a1ce0889165edce8fcd47c46164b0f6",
"0x3a9ee3ca9970571ba6cebecfa33cb98d791ddcd1e4eebdccc63a59a04841a272",
"0x3c5e6bd6f7c4ac6698623464c1ebdf769c79b16b9112b27fd73c18b81f414726",
"0x106f4666970428249623ddaaa67a82a79ed5af2a5198e2a40b4d7bfb8f65c481",
"0xaf623e55e6d923f551083e190169a1f544dd2901dfb366369099b93535a07c08",
"0x576d7bbc5e9a6567d6610cb3bb5850cca190713892ab28b610ff6fecd46f4090",
"0xc338ea782eb6e36424ef474176f53180604c56a31d48e97f407717976460262a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


