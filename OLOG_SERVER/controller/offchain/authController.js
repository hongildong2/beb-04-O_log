const User = require("../../models/user");

module.exports = {
  /*
    POST /offchain/auth/register
    {
        username: '아이디',
        password: '비밀번호'
    }
    */
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      //   const exists = await User.findByUsername(username);
      //   if (exists) {
      //     res.status(409).send("이미 존재하는 회원입니다.");
      //     return;
      //   }
      const newUser = new User({
        username,
        password,
      });
      await newUser.save();
      const data = newUser.toJSON();
      delete data.password;
      res.status(200).send(data);
    } catch (e) {
      res.status(404).send(e);
    }
  },

  login: (req, res) => {},
};
