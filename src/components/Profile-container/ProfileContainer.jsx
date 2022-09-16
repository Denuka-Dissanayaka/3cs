import React, {useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";

//============ import components
import Card from '../Card/Card';

//============ import styles
import { Container } from './Style';




const ProfileContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        //============ API call
        async function apiCall() {
            try {
              const response = await axios.get('https://reqres.in/api/users?page=1');
              await setData(response.data.data)
              
            } catch (error) {
              console.error(error); 
            }
          }
        apiCall();
        
    },[])
    
  return (
    <Container>
        {
            data.map((item) => {
                return(
                    <Link to={`/user/${item.id}`}>
                      <Card name={item.first_name} key={item.id} img={item.avatar} email={item.email}/>
                    </Link> 
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
