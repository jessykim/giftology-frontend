import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import * as profileService from '../../services/profileService'
import { useNavigate } from 'react-router-dom'

const Profiles = ({ user }) => {
  const navigate = useNavigate()
  const [profiles, setProfiles] = useState([])
  const [friends, setFriends] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }

    fetchProfiles()
  }, [])

  const handleAddFriend = async (id, userId) => {
    const newFriend = await profileService.addFriend(id, userId)
    setFriends([newFriend, ...friends])
    navigate('/profiles')
  }


  let userProfile = profiles.find(profile => profile._id === user.profile)

  console.log('userProfile', userProfile)

  const profileCards = profiles.map(profile => (
    profile._id !== user.profile
      ? <ProfileCard profile={profile} user={user} userProfile={userProfile}handleAddFriend={handleAddFriend} key={profile._id} />
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