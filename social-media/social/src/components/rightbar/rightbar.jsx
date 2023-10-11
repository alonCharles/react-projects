import './rightbar.css'
import { Users } from '../../dummydata'
import Online from '../online/online'

export default function rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='assets/gift.png' alt=''/>
          <span className='birthdayText'>
           <b>Deebo</b>  and <b>3 other friends</b>  have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt=''/>
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {
            Users.map((u) => (
              <Online key={u.id} user={u} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}
