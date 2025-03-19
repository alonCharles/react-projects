import React from 'react'

const Teams = ({team, handleTeamChange}) => {
  return (
    <div>
      <select className='form-select form-selcect-lg' value={team} onChange={handleTeamChange}>
            <option value='TeamA'>TeamA</option>
            <option value='TeamB'>TeamB</option>
            <option value='TeamC'>TeamC</option>
            <option value='TeamD'>TeamD</option>
          </select>
    </div>
  )
}

export default Teams
