import React from 'react'

function Footer() {
  const today = new Date()
  return (
    <footer className='Footer'>
      <p> Copywrite &copy; {today.getFullYear()} </p>
    </footer>
  )
}

export default Footer
