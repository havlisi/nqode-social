import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/EditProfile/EditProfile';
import Post from './components/Post/Post';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<ProtectedRoute />}>
        <Route index />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='/profile/:username/edit' element={<EditProfile />} />
        <Route path='/posts' element={<Post />} />
      </Route>
    </Routes>
  );
};

export default App;
