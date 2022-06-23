const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const lightwallet = require("eth-lightwallet");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
  },
  privateKey: {
    type: String,
  },
  receivedToken: {
    type: Number,
    default: 0,
  },
  expectedToken: {
    type: Number,
    default: 0,
  },
});

userSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.password = hash;
};

userSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

userSchema.methods.hidePw = function () {
  const data = this.toJSON();
  delete data.password;
  return data;
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    { _id: this.id, username: this.username },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
  return token;
};

userSchema.methods.generateWallet = function (password) {
  const mnemonic = lightwallet.keystore.generateRandomSeed();

  try {
    return lightwallet.keystore.createVault(
      {
        password: password,
        seedPhrase: mnemonic,
        hdPathString: "m/0'/0'/0'",
      },
      function (err, ks) {
        ks.keyFromPassword(password, function (err, pwDerivedKey) {
          ks.generateNewAddress(pwDerivedKey, 1);

          address = ks.getAddresses().toString();
          privateKey = ks.exportPrivateKey(address, pwDerivedKey);
        });
      }
    );

    // this.address = address;
    // this.privateKey = privateKey;
  } catch (e) {
    console.log(e);
  }
};

userSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

module.exports = mongoose.model("User", userSchema);
