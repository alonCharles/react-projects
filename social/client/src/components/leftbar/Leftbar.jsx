import { Users } from '../../data'
import CloseFriend from '../closeFriend/CloseFriend'
import './leftbar.css'
import { 
    RssFeed, 
    Group, 
    Chat, 
    PlayCircleFilledOutlined, 
    Bookmark, 
    HelpOutline,
    } from '@mui/icons-material'

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbarWrapper">
        <ul className="leftbarList">
            <li className="leftbarListItem">
                <RssFeed className='leftbarIcon'/>
                <span className="leftbarListItemText">Feed</span>
            </li>
            <li className="leftbarListItem">
                <Chat className="leftbarIcon" />
                <span className="leftbarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilledOutlined className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="leftbarListItemText">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="leftbarListItemText">Bookmarks</span>
          </li>
          <li className='leftbarListItem'>
                <HelpOutline className='leftbarIcon'/>
                <span className='leftbarListItemText'> Questions</span>
            </li>
        </ul>
        <button className='leftbarButton'>Show More</button>
        <hr className='leftbarHr'/>
        <ul className="leftbarFriendList">
            {
                Users.map((u)=>(
                    <CloseFriend key={u.id} user={u} />
                ))
            }
        </ul>
      </div>
    </div>
  )
}
