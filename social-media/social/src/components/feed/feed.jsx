import './feed.css'
import Share from '../share/Share'
import Post from '../../post/Post'
import { Users, Posts } from '../../dummydata'

export default function feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {
          Posts.map((p)=>(
             <Post key={p.id} post={p} user={Users.find((u) => u.id === p.userId)}/>
          ))
        }
       
      </div>
    </div>
  )
}