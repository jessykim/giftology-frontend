import FriendRequest from "../Friends/FriendRequest"
import styles from './ProfileCard.module.css'

const ProfileCard = (props) => {

  const handleAddFriendClick = (id) => {
    props.handleAddFriend(id, props.user.profile)
  }

  const handleAcceptClick = (id) => {
    props.handleAcceptFriend(id, props.user.profile)
  }

  const handleDeleteClick = (id) => {
    console.log('deleted!')
    props.handleDeleteFriend(id, props.user.profile)
  }

  const handleViewProfileClick = (id) => {
    props.handleViewProfile(id, props.user.profile)
  }
const avatarIds = [0,1,2,3,4,5,6,7]
let currentAvatar = avatarIds[Math.floor(Math.random()*(avatarIds.length))]


  return (
    <>
      <div key={props.profile._id} className={styles.container}>
        <div className={styles.leftContainer}>
        <img src={
          props.profile.photo
          ? props.profile.photo
        : `/avatars/${currentAvatar}.png`
        } alt='profile'/>
          <p>{props.profile.name}</p>
        </div>
        <div>
        <FriendRequest handleAddFriendClick={handleAddFriendClick} handleAcceptClick={handleAcceptClick} handleDeleteClick={handleDeleteClick} handleViewProfileClick={handleViewProfileClick} profile={props.profile} user={props.user} userProfile={props.userProfile} />
        </div>
      </div>
    </>
  )
}

export default ProfileCard