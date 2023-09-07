import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@material-ui/icons'
import './sidebar.css'

export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
            <li className='sidebarListItem'>
                <RssFeed className='sideBarIcon'/>
                <span className='sidebarListItemText'> Feed</span>
            </li>
            <li className='sidebarListItem'>
                <Chat className='sideBarIcon'/>
                <span className='sidebarListItemText'> Chats</span>
            </li>
            <li className='sidebarListItem'>
                <PlayCircleFilledOutlined className='sideBarIcon'/>
                <span className='sidebarListItemText'> Videos</span>
            </li>
            <li className='sidebarListItem'>
                <Group className='sideBarIcon'/>
                <span className='sidebarListItemText'> Groups</span>
            </li>
            <li className='sidebarListItem'>
                <Bookmark className='sideBarIcon'/>
                <span className='sidebarListItemText'> Bookmarks</span>
            </li>
            <li className='sidebarListItem'>
                <HelpOutline className='sideBarIcon'/>
                <span className='sidebarListItemText'> Questions</span>
            </li>
            <li className='sidebarListItem'>
                <WorkOutline className='sideBarIcon'/>
                <span className='sidebarListItemText'> Jobs</span>
            </li>
            <li className='sidebarListItem'>
                <Event className='sideBarIcon'/>
                <span className='sidebarListItemText'> Events</span>
            </li>
            <li className='sidebarListItem'>
                <School className='sideBarIcon'/>
                <span className='sidebarListItemText'> Courses</span>
            </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src='/assets/person/2.jpeg' alt=''></img>
                <span className='sidebarFriendName'>Jane Doe</span>
            </li>
        </ul>
      </div>
    </div>
  )
}
