import React,{ useState } from 'react'

const GroupedMembers = ({employees, team,setTeam}) => {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())
  //remove groupTeamMembers function call from initial state, add function back to this file and 
  // just setGroupedEmployees to groupTeamMembers after function call
function groupTeamMembers () {
    const teams =[]

    const teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA')
    const teamA = {team: 'TeamA', members: teamAMembers, collapsed: team === "TeamA" ? false : true}
    teams.push(teamA)

    const teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB')
    const teamB = {team: 'TeamB', members: teamBMembers, collapsed: team === "TeamB" ? false : true}
    teams.push(teamB)

    const teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC')
    const teamC = {team: 'TeamC', members: teamCMembers, collapsed: team === "TeamC" ? false : true}
    teams.push(teamC)

    const teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD')
    const teamD = {team: 'TeamD', members: teamDMembers, collapsed: team === "TeamD" ? false : true}
    teams.push(teamD)

    return teams
  }

  const handleTeamClick = (e) => {
    let newGroups = groupedEmployees.map((grouped) => grouped.team === e.currentTarget.id ?
               {...grouped,collapsed:!grouped.collapsed} : grouped );

      setGroupedEmployees(newGroups)
      setTeam(e.currentTarget.id)
  }

  return (
    <main className='container'>
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className='card mt-2' style={{cursor:'pointer'}}>
              <h4 id={item.team} className='card-header text-secondary-bg-white' onClick={handleTeamClick}> Team Name: {item.team}</h4>
              <div id={"collapse" + item.team} className={item.collapsed === true ? "collapse" : ''}>
                  <hr/>
                  {
                    item.members.map(member => {
                      return (
                        <div key={member.id} className='mt-2'>
                          <h5 className='card-title mt-2'>
                            <span className='text-dark'>Full Name: {member.fullName}</span>
                          </h5>
                          <p>Designation: {member.designation}</p>
                        </div>
                      )
                    })
                  }
              </div>
            </div>
          )
        })
      }
    </main>
  )
}

export default GroupedMembers
