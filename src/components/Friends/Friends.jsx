// import { useState, useEffect } from "react"
// import * as profileService from '../../services/profileService'

const Friends = (props) => {

  //   const [isFriended, setIsFriended] = useState([])

  //   useEffect(() => {
  //     const fetchAllFriends = async () => {
  //       const isFriended = await profileService.friendsIndex(props.user._id)
  //       setIsFriended(...isFriended, isFriended)
  //     }
  //     fetchAllFriends()
  //   }, [props.user])  // if the user changes I run this function
  // const friendStatus = props.profile.friends.status 
  // console.log(friendStatus)
  // const isFriendable = !isFriended
  return (
    <div>
      {props.userProfile.friends.map((friend) => {
        if (friend.requester === props.profile._id && friend.status === 'requested') {
          return <p>add or decline!</p>
        } else if (friend.recipient === props.profile._id && friend.status === 'requested') {
          return <p>request sent!</p>
        } else if (friend.recipient === props.profile._id && friend.status === 'accepted') {
          return <p>view profile</p>
        } else if (friend.requester === props.profile._id && friend.status === 'accepted') {
          return <p>view profile</p>
        } else if (friend.requester === props.profile._id && friend.status === 'declined') {
          return <p>no no</p>
        } else if (friend.recipient === props.profile._id && friend.status === 'declined') {
          return <p>no no</p>
        } else {
          return <button onClick={(() => props.handleAddFriendClick(props.profile._id))}>add friend</button>
        }
      }
      )}
    </div>
  )
}

export default Friends;