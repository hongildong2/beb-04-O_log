require("dotenv").config();
const mongoose = require("mongoose");
const NFT = require("./models/nft");
const metaData = require("./models/nftMetadata");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const axios = require("axios");
const { MONGO_URI } = process.env;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function URItoDB() {
  rl.question("URI? : ", async (uri) => {
    console.log(`URI is : ${uri}`);
    rl.close();

    const result = (await axios.get(uri)).data;
    console.log(result);

    NFT.create(
      {
        tokenId: -1,
        tokenURI: uri,
      },
      (err, res) => {
        if (!err) console.log(res);
        else console.log(err);
      }
    );

    process.exit();
  });
}

URItoDB();
