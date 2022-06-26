require("dotenv").config();
const Contract = require("web3-eth-contract");
const Web3 = require("web3");
const {
  LOCAL_GANACHE,
  ERC20_ADDRESS,
  ERC721_ADDRESS,
  SERVER_ADDRESS,
  SERVER_PRIVATE_KEY,
} = process.env;
const ERC721_abi = require("../../truffle/build/contracts/OLOG_ERC721.json");
const ERC20_abi = require("../../truffle/build/contracts/OLOG_ERC20.json");
const ERC721Contract = new Contract(ERC721_abi, ERC721_ADDRESS);
const ERC20Contract = new Contract(ERC20_abi, ERC20_ADDRESS);

const web3 = Web3(LOCAL_GANACHE);
const serverAccount = await web3.eth.accounts.privateKeyToAccount(
  SERVER_PRIVATE_KEY
);
const User = require("../../models/user");
const NFT = require("../../models/nft");
module.exports = {
  ServerNFTBuy: async (req, res) => {
    //토큰 URI랑 해당 사용자 주소 넣고 그냥 바로 mintNFT 실행해버리기
    const { tokenURI, username, price } = req.body;
    //토큰 아이디는 살때 정해짐

    const result = await User.findByUsername(username);
    const { address, receivedToken, expectedToken } = result;
    if (price > receivedToken + expectedToken)
      res.send("You don't have enough balance");
    if (price > receivedToken)
      res.send("Please proceed wallet synchronization");

    console.log("NFT Buy in progress");
    const ERC721_mintNFTData = await ERC721Contract.methods
      .mintNFT(address, tokenURI)
      .encodeABI();
    //methods.myMethod 부분을 파라미터화 할 수 없어서 함수화 불가능

    const ERC721_mintNFTtx = {
      from: SERVER_ADDRESS,
      to: ERC721_ADDRESS,
      gas: 3000000,
      data: ERC721_mintNFTData,
    };

    const signedERC721mintNFTtx = await serverAccount.signTransaction(
      ERC721_mintNFTtx
    );

    const transactionResult = await web3.eth.sendSignedTransaction(
      signedERC721mintNFTtx.rawTransaction,
      (err, hash) => {
        if (!err) {
          console.log("Success");
        } else {
          console.log("mintNFT Fail");
          res.send("Minting Failed");
        }
      }
    );
    console.log(transactionResult);
    //이벤트 리스너 추가, 리턴값 받아오기
    // const tokenId = 받아오기;

    //유저 정보도 DB에서 receivedToken 삭제시켜주기
    const updateBalance = await User.findOneAndUpdate(
      { username: username },
      { receivedToken: receivedToken - price },
      { new: true }
    );

    console.log("balance update", updateBalance);

    //DB에 정보 업데이트, 첫 발행이니까 데이터는 정해져 있음
    //tokenId, sold로 거래소에 등록은 되었지만 컨트랙트상 발행되지 않은NFT도 DB에 저장( 오너는 서버, sold is false )
    
    // const filter = { tokenURI: tokenURI };
    // const update = {
    //   tokenId: tokenId,
    //   ownerUsername: username,
    //   ownerAddress: address,
    //   price: 99999,
    //   sold: true,
    // };
    // const opt = { new: true };
    // let updatedResult = await NFT.findOneAndUpdate(filter, update, opt);
    // res.send(updatedResult);
  },

  UpgradeNFT: async (req, res) => {
    //Upgrade메서드 실행
    const { username, tokenId } = req.body;
    const { address, NFTPossessed, receivedToken } = await User.findByUsername(
      username
    );
    if (!NFTPossessed.includes(tokenId)) res.send("You don't have this NFT");
    //거지인지 아닌지 확인하기
    const { NFTrewardFactor } = await NFT.findBytokenId(tokenId);
    const price;

    if (NFTrewardFactor === 1) {
      //received token 충분한지 확인
      //User 스키마에 check balance메소드 넣기
      price = 100;
    } else if (NFTrewardFactor === 2) {
      price = 1000;
      //확인   
     }

    const ERC721_UpgradeNFTData = await ERC721Contract.methods
      .UpgradeNFT(address, tokenId)
      .encodeABI();

    const ERC721_UpgradeNFTtx = {
      from: SERVER_ADDRESS,
      to: ERC721_ADDRESS,
      gas: 3000000,
      data: ERC721_UpgradeNFTData,
    };

    const signedERC721UpgradeNFTtx = await serverAccount.signTransaction(
      ERC721_UpgradeNFTtx
    );

    const transactionResult = await web3.eth.sendSignedTransaction(
      signedERC721UpgradeNFTtx.rawTransaction,
      (err, hash) => {
        if (!err) {
          console.log("Upgrade Transaction success");
          //DB 정보 업데이트
        } else {
          console.log("Transaction Fail");
          res.send("Transaction Failed");
        }
      }
    );
    console.log("transaction", transactionResult);

    //이벤트 리스너 추가, 리턴값 찾기
    // const reward_factor = 이벤트 리스너로 찾은거
    // const upgradeResult = 찾은거

    // const updateBalance = await User.findOneAndUpdate(
    //   { username: username },
    //   { receivedToken: receivedToken - price },
    //   { new: true }
    // );

    // if (upgradeResult === false) {
    //   res.send("You've Failed");
    // } else {
    //   const filter = { tokenId: tokenId };
    //   const update = { NFTrewardFactor: reward_factor };
    //   const opt = { new: true };

    //   const updatedResult = await NFT.findOneAndUpdate(filter, update, opt);
    //   res.send(updatedResult);
    // }

    //DB정보저장
  },

  NFTSell: async (req, res) => {
    //DB에만 반영해서 마켓플레이스에 올리기
  },

  UserNFTBuy: async (req, res) => {
    //UserNFTSold 메서드 실행
    const ERC721_mintNFTData = await ERC721Contract.methods
      .mintNFT(address, tokenURI)
      .encodeABI();

    const ERC721_mintNFTTx = {
      from: SERVER_ADDRESS,
      to: ERC721_ADDRESS,
      gas: 3000000,
      data: ERC721_mintNFTData,
    };

    const signedERC721mintNFTTX = await serverAccount.signTransaction(
      ERC721_mintNFTTx
    );

    web3.eth.sendSignedTransaction(
      signedERC721mintNFTTX.rawTransaction,
      (err, hash) => {
        if (!err) {
          console.log("ERC721 Successfully Initialized");
        } else {
          console.log("ERC721 Initialization Failed");
        }
      }
    );
  },
};
