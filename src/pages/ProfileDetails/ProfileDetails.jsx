import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import * as profileService from '../../services/profileService'

const ProfielDetails = (props) => {
  const {id} = useParams()
  const [profile, setProfile] = useState(null)

useEffect(() => {
  const fetchProfile = async () => {
    const profileData = await profileService.show(id)
    setProfile(profileData)
  }
  fetchProfile()
}, [id])

return (
  <main>
    detaILS
  </main>
)
}

export default ProfielDetails;