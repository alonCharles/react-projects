import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import { Users, Posts } from "../../data"

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {
          Posts.map((p)=>(
             <Post key={p.id} post={p} user={Users.find((u) => u.id === p.userId)}/>
          ))
        }
      </div>
    </div>
  )
}
