import { Link } from "react-router-dom"

const ProfileCard = (props) => {

  const handleAddFriendClick = (id) => {
    props.handleAddFriend(id, props.user.profile)
}

  return (
    <>
    {
      props.profiles.map(profile => (
        profile._id !== props.user.profile
          ? <div key={profile._id}> 
          <Link to={`/profiles/${profile._id}`} >
            <p>{profile.name}</p>
          </Link>
            <button onClick={() => handleAddFriendClick(profile._id)}>add friend</button>
          </div>
          : null
      ))
    }
  </>
  )
}

export default ProfileCard