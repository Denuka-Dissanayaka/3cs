import React from 'react';
import {Link} from "react-router-dom";

import Header from '../components/Header/Header';
import ProfileContainer from '../components/Profile/Profile';
import Btn from '../components/Btn/Btn';

const Profile = () => {
  return (
    <div>
      <Header/>
      <ProfileContainer/>
      <Link to='/'>
        <Btn/>
      </Link>
    </div>
  )
}

export default Profile
