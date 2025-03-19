import React from 'react'
import femaleImage from '../images/femaleProfile.jpg'
import maleImage from '../images/maleProfile.jpg'
const TeamMemberCard = ({employee, handleCardClick, team}) => {
  return (
    <div id={employee.id} key={employee.id} className={(employee.teamName === team ? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleCardClick} >
                  {(employee.gender) === 'male' ? <img src={maleImage} className='card-img-top' alt='' />
                        : <img src={femaleImage} className='card-img-top' alt='' />
                  }
                    
                    <div className='card-body'>
                        <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                        <p className='card-text'>Designation: {employee.designation}</p>
                    </div>
                </div>
  )
}

export default TeamMemberCard
