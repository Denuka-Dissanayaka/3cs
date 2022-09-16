import React from 'react'

import {CardContainer} from './Style';

const Card = ({name , img, email}) => {
  return (
    <CardContainer>
        <div className='img-container'>
            <img src={img} alt="" />
        </div>
        <p className='name'>{name}</p>
        <p className='email'>{email}</p>
    </CardContainer>
  )
}

export default Card
