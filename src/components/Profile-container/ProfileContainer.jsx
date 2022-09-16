import React, {useEffect, useState } from 'react'
import axios from 'axios';

//============ import components
import Card from '../Card/Card';

//============ import styles
import { Container } from './Style';

//============ API call


const ProfileContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function apiCall() {
            try {
              const response = await axios.get('https://reqres.in/api/users?page=1');
              await setData(response.data.data)
              console.log(data);
            } catch (error) {
              console.error(error); 
            }
          }
        apiCall();
        console.log(data);
    },[])
    
  return (
    <Container>
        {
            data.map((item) => {
                return(
                    <Card name={item.first_name} key={item.id} img={item.avatar} email={item.email}/> 
                )
            })
        }
      {/* <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> */}
    </Container>
  )
}

export default ProfileContainer
