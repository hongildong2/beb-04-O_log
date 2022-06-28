const NFT = require("../../models/nft");
const axios = require("axios");
require("dotenv").config();

module.exports = {
  queryNFT: async (req, res) => {
    const queryAllNFT = await NFT.find({ sold: false });
    const arr = await Promise.all(
      queryAllNFT.map(async (el) => {
        const res = await axios.get(el.tokenURI);
        const metaData = res.data;
        return metaData;
      })
    );

    //arr랑 queryAllNFT랑 MAP으로 합쳐서 다시보내기
    const result = [];
    for (let i = 0; i < queryAllNFT.length; i++) {
      result.push(Object.assign(arr[i], queryAllNFT[i]._doc));
    }

    res.send(result);
  },
  myNFT: async (req, res) => {
    const username = res.locals.user.username;
    const queryMyNFT = await NFT.find({ ownerUsername: username });
    const arr = await Promise.all(
      queryMyNFT.map(async (el) => {
        const res = await axios.get(el.tokenURI);
        const metaData = res.data;
        return metaData;
      })
    );

    //arr랑 queryAllNFT랑 MAP으로 합쳐서 다시보내기
    const result = [];
    for (let i = 0; i < queryMyNFT.length; i++) {
      result.push(Object.assign(arr[i], queryMyNFT[i]._doc));
    }

    res.send(result);
  },
};
