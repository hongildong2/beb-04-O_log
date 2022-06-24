const Post = require("../../models/post");
const User = require("../../models/user");
const ogs = require("open-graph-scraper");

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
    }
*/

  write: async (req, res) => {
    // 링크만 받아옴
    const { blogLink } = req.body;

    // 링크에서 데이터 뽑아오는 작업 > title, postImgUrl 가져옴
    const options = { url: blogLink };
    const data = await ogs(options);
    const { er, result, response } = data;

    // 새로운 post 인스턴스 만들어 줌
    const newPost = new Post({
      blogLink,
      title: result.ogTitle,
      username: res.locals.user.username,
      postImageUrl: result.ogImage.url,
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
    Get /offchain/posts/mypage
*/
  read: async (req, res) => {
    const { user } = res.locals;

    const query = {
      ...(user.username ? { username: user.username } : {}),
    };
    try {
      const posts = await Post.find(query).exec();
      res.status(200).send(posts);
    } catch (e) {
      res.status(404).send(e);
    }
  },
};
