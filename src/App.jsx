// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import WishlistIndex from './pages/WishlistIndex/WishlistIndex'
import NewWishlist from './pages/NewWishlist/NewWishlist'
import WishlistDetails from './pages/WishlistDetails/WishlistDetails'
import EditWishlist from './pages/EditWishlist/EditWishlist'
import NewItem from './pages/NewItem/NewItem'
import EditItem from './pages/EditItem/EditItem'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import Friends from './pages/Friends/Friends'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as wishlistService from './services/wishlistService'
import * as profileService from './services/profileService'

// styles
import './App.css'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [wishlists, setWishlists] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddWishlist = async (wishlistData) => {
    const newWishlist = await wishlistService.create(wishlistData)
    setWishlists([newWishlist, ...wishlists])
    navigate('/wishlists')
  }

  const handleUpdateWishlist = async (wishlistData) => {
    const updatedWishlist = await wishlistService.update(wishlistData)
    setWishlists(wishlists.map((w) => wishlistData._id === w._id ? updatedWishlist : w))
    navigate('/wishlists')
  }

  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await wishlistService.index(user.profile)
      setWishlists(data)
    }
    if (user) fetchWishlist()
  }, [user])

  console.log("ALLLL", wishlists)
  const handleAddFriend = async (id, userId) => {
    await profileService.addFriend(id, userId)
    window.location.reload(false)
  }

  const handleAcceptFriend = async (id, userId) => {
    await profileService.acceptFriendRequest(id, userId)
    window.location.reload(false)
  }

  const handleDeleteFriend = async (id, userId) => {
    await profileService.deleteFriend(id, userId)
    window.location.reload(false)
  }

  const handleViewProfile = async (id) => {
    await profileService.show(id)
  }


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles user={user} handleAddFriend={handleAddFriend} handleAcceptFriend={handleAcceptFriend} handleDeleteFriend={handleDeleteFriend} handleViewProfile={handleViewProfile}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profiles/:id"
          element={
            <ProtectedRoute user={user}>
              <ProfileDetails user={user}/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/friends"
          element={
            <ProtectedRoute user={user}>
              <Friends user={user} handleAddFriend={handleAddFriend} handleAcceptFriend={handleAcceptFriend} handleDeleteFriend={handleDeleteFriend} handleViewProfile={handleViewProfile}/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlists"
          element={
            <ProtectedRoute user={user}>
              <WishlistIndex  wishlists={wishlists} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/:id"
          element={
            <ProtectedRoute user={user}>
              <WishlistDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/new"
          element={
            <ProtectedRoute user={user}>
              <NewWishlist handleAddWishlist={handleAddWishlist} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/1/new"
          element={
            <ProtectedRoute user={user}>
              <NewItem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlists/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditWishlist handleUpdateWishlist={handleUpdateWishlist} />
            </ProtectedRoute>
          }
        />

        {/* <Route
          path="/wishlists/1/edit-item"
          element={
            <ProtectedRoute user={user}>
              <EditItem />
            </ProtectedRoute>
          }
        /> */}

        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
