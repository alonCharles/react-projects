import './rightbar.css'
import { Users } from '../../data'
import Online from '../online/Online'

export default function Rightbar({profile}) {

const HomeRightbar = () => {
  return (
    <>
    <div className="birthdayContainer">
          <img className='birthdayImg' src='assets/gift.png' alt=''/>
          <span className='birthdayText'>
           <b>Lisa Bonet</b>  and <b>3 other friends</b>  have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt=''/>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className="rightbarFriendList">
          {
            Users.map((u) => (
              <Online key={u.id} user={u} />
            ))
          }
        </ul>
    </>
  )
}

const ProfileRightBar = () => {
  return(
    <>
      <h4 className="rightbarTitle">User Info</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Atlanta</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Fort Lauderdale</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Favorite Hobby:</span>
          <span className="rightbarInfoValue">MultiMedia(Movies, Video Games, Tv Shows, etc.)</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowingList">
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src='assets/person/1.jpeg' alt=''/>
            <span className="rightbarFollowingName">Mike Jones</span>
          </div>
      </div>
    </>
  )
}
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightBar/>
      </div>
    </div>
  )
}
