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

      const currentToken = res[0].expectedtoken;
      const rewardedToken = currentToken + reward;

      const filter = { userid: userID };
      const update = { expectedtoken: rewardedToken };

      let result = await Users.findOneandUpdate(filter, update);

      // findOneandUpdate로 수정

      res.send(result);
    } else {
      res.send("Please fill all required field");
    }
  },
};
