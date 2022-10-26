import { Link } from "react-router-dom"
import styles from './FriendRequest.module.css'

const Friends = (props) => {

  function isFriendRequester(friend) {
    if (friend.recipient === props.profile._id && friend.status === 'requested') {
      return true
    }
  }

  function isFriendRecipient(friend) {
    if (friend.requester === props.profile._id && friend.status === 'requested') {
      return true
    }
  }

  function isFriend(friend) {
    if (friend.recipient === props.profile._id && friend.status === 'accepted') {
      return true
    } else if (friend.requester === props.profile._id && friend.status === 'accepted') {
      return true
    }
  }


  return (
    <div className={styles.container}>
      {props.userProfile.friends.some(isFriendRequester)
        ? <p>Request sent!</p>
        : props.userProfile.friends.some(isFriendRecipient)
          ? <button onClick={(() => props.handleAcceptClick(props.profile._id))}>accept</button>
          : props.userProfile.friends.some(isFriend)
          ? <div>
            <div>
          <button className={styles.btn}><Link to={`/profiles/${props.profile._id}`}>View Profile</Link></button>
          </div>
          <div>
          <button className={styles.btn} onClick={(() => props.handleDeleteClick(props.profile._id))}>Remove Friend</button>
          </div>
          </div>
          : <button className={styles.btn} onClick={(() => props.handleAddFriendClick(props.profile._id))}>Add Friend</button>
        }
    </div>
  )
}

export default Friends;