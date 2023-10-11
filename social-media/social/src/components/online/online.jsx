import "./online.css"


export default function Online({user}) {
    return (
        <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src='assets/person/3.jpeg' alt=''/>
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Denzel Washington </span>
          </li>
    )
}