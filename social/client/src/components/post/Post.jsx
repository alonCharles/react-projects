import { MoreVert } from '@mui/icons-material'
import './post.css'
import { useState } from 'react'

export default function Post({post, user}) {
const [like, setLike] = useState(post.likes)
const [isLiked, setIsLiked] = useState(false)

const likeHandler = () => {
  setLike(isLiked ? like - 1: like + 1)
  setIsLiked(!isLiked)
}

  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={user.profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo}alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
              <img className='likeIcon'src='/assets/like.png' onClick={likeHandler} alt='' />
              <img className='heartIcon' src='/assets/heart.png' onClick={likeHandler} alt='' />
              <span className='postLikeCounter'>  {like} liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
