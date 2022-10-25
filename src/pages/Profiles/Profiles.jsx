import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import * as profileService from '../../services/profileService'

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
      ? <ProfileCard profile={profile} user={props.user} userProfile={userProfile}handleAddFriend={props.handleAddFriend} handleAcceptFriend={props.handleAcceptFriend} key={profile._id} />
      : null
  ))

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {/* {profiles.length ? */}
        <>
          {profileCards}
        </>
    </>
  )
}

export default Profiles