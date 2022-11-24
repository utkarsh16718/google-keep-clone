import React from 'react'

function Navbar() {
    const logo=(
        <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
      )
  return (
    <div className='header'>
        {logo}
        <h1>Keep App</h1>
    </div>
  )
}

export default Navbar 