import React from 'react'
import Teams from './Teams'
import TeamMembers from './TeamMembers'
const Employees = ({employeeList, team, handleCardClick, handleTeamChange}) => {
   

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <Teams team={team} handleTeamChange={handleTeamChange}/>
          </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
            <div className='card-collection'>
            <TeamMembers employeeList={employeeList} handleCardClick={handleCardClick} team={team}/>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Employees
