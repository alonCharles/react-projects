import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = ({employeeList, handleCardClick, team}) => {
  return (
    
        employeeList.map((employee) => (
            <TeamMemberCard key={employee.id} employee={employee} handleCardClick={handleCardClick} team={team}/>
        ))
  )
}

export default TeamMembers
