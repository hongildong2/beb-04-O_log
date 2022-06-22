//블로그 포스트 POST 요청 받으면 DB수정하는 함수
module.exports = {
  // 수도코드입니다.
  //findAll: //콜백함수를 작성합니다. 라우터에 임포트되어 사용됩니다.
  blogPost: async (req, res) => {
    if (!req.body) {
      const userID = req.body.userID;
      const blogLink = req.body.link;
      const title = req.body.title;

      const post = [
        {
          postid: INCREMENT,
          postuserid: userID,
          bloglink: blogLink,
          title: title,
        },
      ];

      await Posts.insertMany(post, (err, res) => {
        if (err) console.log(err);
        else console.log(res);
      });

      //실패하면 아래꺼 취소하는 로직 추가

      // const currentToken = res[0].expectedtoken;
      // const rewardedToken = currentToken + reward;

      // const filter = { userid: userID };
      // const update = { expectedtoken: rewardedToken };

      // let result = await Users.findOneandUpdate(filter, update);

      // findOneandUpdate로 수정

      res.send(result);
    } else {
      res.send("Please fill all required field");
const Post = require("../../models/post");

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

    try {
      await newPost.save();
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
