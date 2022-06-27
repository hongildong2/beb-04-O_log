const NFT = require("../../models/nft");
require("dotenv").config();

module.exports = {
  queryNFT: async (req, res) => {
    const queryAllNFT = await NFT.find({ sold: false });
    res.send(queryAllNFT);
  },
  myNFT: async (req, res) => {
    const username = res.locals.user.username;
    const queryMyNFT = await NFT.find({ ownerUsername: username });
    res.send(queryMyNFT);
  },
};
