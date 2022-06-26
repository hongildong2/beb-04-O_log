require("dotenv").config();
const mongoose = require("mongoose");
const {
  LOCAL_GANACHE,
  ERC20_ADDRESS,
  ERC721_ADDRESS,
  SERVER_ADDRESS,
  SERVER_PRIVATE_KEY,
  MONGO_URI,
} = process.env;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

const User = require("./models/user");
const NFT = require("./models/nft");

dbInitializer();

async function dbInitializer() {
  await User.findOneAndUpdate(
    { username: "server" },
    {
      address: SERVER_ADDRESS,
      privateKey: SERVER_PRIVATE_KEY,
      receivedToken: 0,
      expectedToken: 0,
      NFTPossessed: [],
    }
  );
  await NFT.findOneAndUpdate({ tokenURI: "AAA" }, { tokenId: -1 });
  process.exit();
}
