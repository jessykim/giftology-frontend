
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
          ? <p>add or decline!</p>
          : props.userProfile.friends.some(isFriend)
          ? <p>view profile</p>
          : <button onClick={(() => props.handleAddFriendClick(props.profile._id))}>add friend</button>
        }
    </div>
  )
}

export default Friends;