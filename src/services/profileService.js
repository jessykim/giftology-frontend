import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getProfile(userProfileId) {
  const res = await fetch(`${BASE_URL}/${userProfileId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

async function addFriend(id, userId) {
  const res = await fetch(`${BASE_URL}/${userId}/friends`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ _id: id })
  })
  return await res.json()
}

async function friendsIndex(userId) {
  const res = await fetch(`${BASE_URL}/${userId}/friends`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return await res.json()
}

async function acceptFriendRequest(id, userId) {
  const res = await fetch(`${BASE_URL}/${userId}/friends`, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ _id: id })
  })
  return await res.json()
}

async function deleteFriend(id, userId) {
  const res = await fetch(`${BASE_URL}/${userId}/friends`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ _id: id })
  })
  return await res.json()
}

async function show(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
    }
  })
  return await res.json()
}


export { getProfile, getAllProfiles, addPhoto, addFriend, friendsIndex, acceptFriendRequest, deleteFriend, show }
