import React from 'react'
import Header from '../../components/Header/Header'
import profileAvatar from '../../assets/Profile.png'
import { auth } from '../../firebase/firebase'
import './profile.scss'

function Profile() {
    const user = auth.currentUser;

   
  return (
    <div className='profile'>
        <div className='profile__header'>
            <Header />
        </div>
        <div className='profile__container'>
            <h1>Edit Profile</h1>
            <div className='profile__details'>
                <div className='details--avatar'>
                    <img src={profileAvatar}  alt='Profile Avatar'/>
                </div>
                <div className='details--info'>
                    <h3>{user.email}</h3>
                    <div className='details--plans'>
                        <button onClick={() => auth.signOut()}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile