import React from 'react'

export default function CloseFriend({user}) {
  return (
    <div>
      <li className="leftbarFriend">
                <img src={user.profilePicture} alt="" className="leftbarFriendImg" />
                <span className="leftbarFriendName">{user.username}</span>
            </li>
    </div>
  )
}
