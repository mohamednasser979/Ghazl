import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Cumque, quia quam. Consectetur dicta at 
          voluptates culpa maiores quia hic dignissimos? 
          Delectus iste cum laborum fuga distinctio quam autem magni aut!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Blanditiis 
          molestiae recusandae dolorem atque, 
          perspiciatis sunt reprehenderit quod quam harum nemo.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
