import { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import * as profileService from '../../services/profileService'

const Profiles = ({user}) => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.length ? 
        <>
          <ProfileCard profiles={profiles} user={user}/>
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profiles