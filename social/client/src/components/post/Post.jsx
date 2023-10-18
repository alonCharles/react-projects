import { MoreVert } from '@mui/icons-material'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">Alon Charles</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">My first Post</span>
            <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
            <img className='likeIcon'src='/assets/like.png' alt='' />
                    <img className='heartIcon' src='/assets/heart.png' alt='' />
                    <span className='postLikeCounter'>  a number of people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
