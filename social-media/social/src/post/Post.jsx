import './post.css'
import { MoreVert } from '@material-ui/icons'

export default function Post({post, user}) {
console.log(user)
  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src={user.profilePicture} alt=''/>
                    <span className='postUsername'>
                         {user.username}
                        </span>
                    <span className='postDate'> {post.date}</span>
                </div>
                <div className='postTopRight'>
                    <MoreVert/>
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{post?.desc}</span>
                <img className='postImg' src={post.photo} alt='' />
            </div>
            <div className='postBottom'>
                <div className='postBottomLeft'>
                    <img className='likeIcon'src='/assets/like.png' alt='' />
                    <img className='heartIcon' src='/assets/heart.png' alt='' />
                    <span className='postLikeCounter'>{post.likes} people like it</span>
                </div>
                <div className='postBottomRight'>
                    <span className='postCommentText'>{post.comment} comments</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}
