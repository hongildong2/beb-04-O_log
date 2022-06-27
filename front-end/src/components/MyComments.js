import React, { useState } from 'react'
import Comment from './Comment';

export default function MyComments() {
  const temp = [{username: 'abc', content:'굿굿', created_at:"2022-06-25T08:23:54.956Z"},
  {username: 'myUserName', content:'멋져요', created_at:"2022-06-25T08:23:54.956Z"},
  {username: 'user1', content:'냥', created_at:"2022-06-25T08:23:54.956Z"},
  {username: 'abc', content:'굿굿', created_at:"2022-06-25T08:23:54.956Z"},
  {username: 'abc', content:'굿굿', created_at:"2022-06-25T08:23:54.956Z"},
  {username: 'abc', content:'굿굿', created_at:"2022-06-25T08:23:54.956Z"}]
  const [comments, setComments] = useState(temp);
  //내 댓글 요청(누구나)

  return (
      <div className='comments_container'>
        {comments.map((el, idx) => {
          return <Comment key={idx} username={el.username} content={el.content} created_at={el.created_at} />
        })}
      </div>
  )
}
