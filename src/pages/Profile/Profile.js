import React from 'react'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import profileAvatar from '../../assets/Profile.png'
import './profile.scss'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

function Profile() {
    const user = useSelector(selectUser)

    function handleSignOutButton(){
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            alert(error)
        });
    }
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
                    <button onClick={handleSignOutButton}>Sign Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile