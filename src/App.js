
import './App.css';
import SideBar from './Components/Sidebar/Sidebar';
// import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import CreateNew from './Pages/CreateNew/CreateNew';
import Signin from './Pages/Singin/Signin';

// import Cookies from 'js-cookie'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { setIsAuthenticated, setUser } from './store/userSlice';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
 
function App() {

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  const getUser = async () => {

		try {
			const url = `http://localhost:2000/api/v1/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });

      console.log("script from app.js")
      // dispatchEvent()
      // const [_id, name, picture, email, provider, googleId] = data?.user;
      const _id = data.user._id;
      const name = data.user.name;
      const picture = data.user.picture;
      const email = data.user.email;
      const provider = data.user.provider;
      const googleId = data.user.googleId;

      if(data.user){
        console.log("user found")
        dispatch(
          setUser({
            "id" : _id,
            "name" : name,
            "picture"  : picture,
            "email"  :email,
            "provider" : provider,
            "googleId" : googleId
          })
        )
    }
      dispatch(setIsAuthenticated(true));	
		} catch (err) {
			console.log(err);
		}
	};


  useEffect(()=>{
    getUser();
  }, [])
  
  return (
    <Router>
      
      
      <SideBar>
        <Routes>
          <Route path = "/" element = {<Signin/>}/>
          {/* <Route path="/" element={<></>} /> */}
          {/* <Route path="/users" element={<></>} /> */}
          <Route path="/messages" element={<></>} />
          <Route path="/create" element={<CreateNew/>} />
          

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
      
      
      
    </Router>
  );
}

export default App;
