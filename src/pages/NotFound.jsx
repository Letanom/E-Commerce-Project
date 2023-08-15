import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2 style={{marginBottom:"5%",textAlign:"center"}}>There is no such page" </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut egestas tellus. Proin sapien elit, malesuada cursus sem vel, semper elementum est. Nulla id felis vitae risus luctus hendrerit vitae eget nisi. Donec euismod nibh eget ligula tincidunt, et porttitor velit dapibus.</p>
        <p>To return to the main page <Link to={"/"}>Tıklayınız</Link></p>
    </div>
  )
}

export default NotFound