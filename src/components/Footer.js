import React from 'react'

const Footer = () => {
  const year =new Date()
  return (
    <footer className='Footer'>
         <h3>COPY RIGHTS &copy;{year.getFullYear()}</h3>
    </footer>
  )
}

export default Footer