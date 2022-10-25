import { Link } from "react-router-dom"
import Friends from "../Friends/Friends"

const ProfileCard = (props) => {

  const handleAddFriendClick = (id) => {
    props.handleAddFriend(id, props.user.profile)
}

  return (
    <>
          <div key={props.profile._id}> 
          <Link to={`/profiles/${props.profile._id}`} >
            <p>{props.profile.name}</p>
          </Link>
            <Friends handleAddFriendClick={handleAddFriendClick} profile={props.profile} user={props.user} userProfile={props.userProfile}/>
          </div>
  </>
  )
}

export default ProfileCard