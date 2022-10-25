import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import * as profileService from '../../services/profileService'
import styles from './Profiles.module.css'

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }

    fetchProfiles()
  }, [])


  let userProfile = profiles.find(profile => profile._id === props.user.profile)


  const profileCards = profiles.map(profile => (
    profile._id !== props.user.profile
      ? <ProfileCard profile={profile} user={props.user} userProfile={userProfile}handleAddFriend={props.handleAddFriend} handleAcceptFriend={props.handleAcceptFriend} handleDeleteFriend={props.handleDeleteFriend} key={profile._id} />
      : null
  ))

  return (
    <>
        <div className={styles.containerA}>
          {profileCards}
        </div>
    </>
  )
}

export default Profiles