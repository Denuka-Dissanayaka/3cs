import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {Container} from './Style';

const Profile = () => {
    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function apiCall() {
            try {
              const {data:{data}} = await axios.get(`https://reqres.in/api/users/${id}`);
              await setData(data);
              console.log(data);
            } catch (error) {
              console.error(error); 
            }
          }
        apiCall();
        
    },[])
  return (
    <Container>
      <div className='img-container'>
        <img src={data.avatar} alt="" />
      </div>
      <div className='text-container'>
        <p><span>First Name:</span>{data.first_name}<span></span></p>
        <p><span>Last Name:</span>{data.last_name}<span></span></p>
        <p><span>Email:</span>{data.email}<span></span></p>
      </div>
    </Container>
  )
}

export default Profile
