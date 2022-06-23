const User = require("../../models/user");

module.exports = {
  /*
    Explore: 모든 posts를 보내줌
    Get /offchain/posts
*/

  list: async (req, res) => {
    try {
      const posts = await Post.find().exec();
      res.status(200).send(posts);
    } catch (e) {
      res.status(404).send(e);
    }
  },

  /*  
  MyPage: post를 게시함
  Post /offchain/posts
  {
      "blogLink": "블로그링크",
      "title" : "제목"
    }
*/

  write: async (req, res) => {
    const { blogLink, title } = req.body;
    const newPost = new Post({
      blogLink,
      title,
      postUserName: res.locals.user.username,
    });

    // const currentToken = res[0].expectedtoken;
    // const rewardedToken = currentToken + reward;

    // const filter = { userid: userID };
    // const update = { expectedtoken: rewardedToken };

    // let result = await Users.findOneandUpdate(filter, update);

    // findOneandUpdate로 수정

    try {
      await newPost.save();
      const { expectedToken } = await User.findByUsername(
        res.locals.user.username
      );
      const reward = 10;
      const rewardedToken = expectedToken + reward;
      const filter = { username: res.locals.user.username };
      const update = { expectedToken: rewardedToken };
      let result = await User.findOneAndUpdate(filter, update, {
        returnDocument: "after",
      });
      res.status(200).send(newPost);
    } catch (e) {
      res.status(404).send(e);
    }
  },

  /* 
    MyPage: 한 명의 유저의 post들을 보내줌
    Get /offchain/posts/:id 
*/
  read: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findById(id).exec();
      if (!post) {
        res.status(404).send("해당 post가 없습니다.");
        return;
      }
      res.status(200).send(post);
    } catch (e) {
      res.status(404).send(e);
    }
  },
};
