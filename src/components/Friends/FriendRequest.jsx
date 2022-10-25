import { Link } from "react-router-dom"

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
    <div>
      {props.userProfile.friends.some(isFriendRequester)
        ? <p>request sent!</p>
        : props.userProfile.friends.some(isFriendRecipient)
          ? <button onClick={(() => props.handleAcceptClick(props.profile._id))}>accept</button>
          : props.userProfile.friends.some(isFriend)
          ? <div>
            <div>
          <button><Link to={`/profiles/${props.profile._id}`}>view profile</Link></button>
          </div>
          <div>
          <button onClick={(() => props.handleDeleteClick(props.profile._id))}>delete Friend</button>
          </div>
          </div>
          : <button onClick={(() => props.handleAddFriendClick(props.profile._id))}>add friend</button>
        }
    </div>
  )
}

export default Friends;