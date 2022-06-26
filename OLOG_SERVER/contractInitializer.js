const Web3 = require("web3");
const Contract = require("web3-eth-contract");
require("dotenv").config();
const {
  LOCAL_GANACHE,
  ERC20_ADDRESS,
  ERC721_ADDRESS,
  SERVER_ADDRESS,
  SERVER_PRIVATE_KEY,
} = process.env;

const ERC721_abi = require("../../truffle/build/contracts/OLOG_ERC721.json");
const ERC20_abi = require("../../truffle/build/contracts/OLOG_ERC20.json");
const web3 = Web3(LOCAL_GANACHE);

console.log(
  "Make sure that you've put correct contract addresses into .env files"
);
async () => {
  const serverAccount = await web3.eth.accounts.privateKeyToAccount(
    SERVER_PRIVATE_KEY
  );
  if (!ERC20_ADDRESS || !ERC721_ADDRESS)
    console.log("Please put contract addresses into .env file");

  //ERC721에선 ERC20토큰으로 구매가 가능하게 하기 위해 설정을 진행합니다, ERC20 에선 ERC721 컨트랙트에 토큰 전송 권한을 주기위해 설정을 진행합니다.
  try {
    //ERC721 Initializer
    const ERC721Contract = new Contract(ERC721_abi, ERC20_ADDRESS);
    const ERC721_InitData = await ERC721Contract.methods
      .setERC20Address(ERC20_ADDRESS)
      .encodeABI();
    const ERC721_InitTx = {
      from: SERVER_ADDRESS,
      to: ERC721_ADDRESS,
      gas: 3000000,
      data: ERC721_InitData,
    };

    const signedERC721InitTX = await serverAccount.signTransaction(
      ERC721_InitTx
    );

    web3.eth.sendSignedTransaction(
      signedERC721InitTX.rawTransaction,
      (err, hash) => {
        if (!err) {
          console.log("ERC721 Successfully Initialized");
        } else {
          console.log("ERC721 Initialization Failed");
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
  //ERC20 Initializer
  try {
    const ERC20Contract = new Contract(ERC20_abi, ERC721_ADDRESS);

    const ERC20_InitData = await ERC20Contract.methods
      .setERC721Address(ERC721_ADDRESS)
      .encodeABI();
    const ERC20_InitTx = {
      from: SERVER_ADDRESS,
      to: ERC20_ADDRESS,
      gas: 3000000,
      data: ERC20_InitData,
    };

    const signedERC20InitTX = await serverAccount.signTransaction(ERC20_InitTx);

    web3.eth.sendSignedTransaction(
      signedERC20InitTX.rawTransaction,
      (err, hash) => {
        if (!err) {
          console.log("ERC20 Successfully Initialized");
        } else {
          console.log("ERC20 Initialization Failed");
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
