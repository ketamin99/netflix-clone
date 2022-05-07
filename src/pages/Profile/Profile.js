import {React} from 'react'
import {  useSelector } from 'react-redux'
import {  selectUser } from "../../features/userSlice";
import Header from '../../components/Header/Header'
import profileAvatar from '../../assets/Profile.png'
import { auth } from '../../firebase/firebase'
import './profile.scss'

function Profile() {


let user = useSelector(selectUser);



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
                    <h3>Email: {user.user.email}</h3>
                    <button onClick={() => auth.signOut()}>Sign Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile