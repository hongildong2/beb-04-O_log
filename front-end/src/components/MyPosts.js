import Card from './Card'
import './MyPosts.css'

export default function MyPosts(props) {
  return (
    <div className='mypage_posts'>
    <div className='title'>Posts</div>
    <div className='mypost_container'>
      {props.myPosts.map((el, idx) => {
        return <Card key={idx} postImageUrl={el.postImageUrl} blogLink={el.blogLink} title={el.title} created_at={el.created_at} username={el.username} faviconUrl={el.faviconUrl}/>
      })}
    </div>
  </div>
  )
}
