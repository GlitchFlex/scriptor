import React, { useEffect } from 'react';
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../logo2.png';
import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'antd';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import {
    setIsAuthenticated,
    setUser,
    userSelector,
} from '../../store/userSlice';

function Signin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log(process.env.REACT_APP_SERVER_URL)
    const clickHandler = async () => {
        await window.open(
            `${process.env.REACT_APP_SERVER_URL}/auth/google/callback`,
            '_self'
        );

        // getUser();

    };

    // useEffect(()=>{
    //     const userObj = localStorage.getItem("user");
    //     if(userObj){
    //         navigate('/create');
    //     }
    // })

    const getUser = async () => {

		try {
			const url = `${process.env.REACT_APP_SERVER_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });

      // console.log("script from app.js")
      // dispatchEvent()
      // const [_id, name, picture, email, provider, googleId] = data?.user;
      const _id = data.user._id;
      const name = data.user.name;
      const picture = data.user.picture;
      const email = data.user.email;
      const provider = data.user.provider;
      const googleId = data.user.googleId;
      localStorage.setItem("user",JSON.stringify({...data.user, googleId : undefined}))      
      if(data.user){
          // console.log("user found")
          dispatch(
              setUser({
                  "id" : _id,
            "name" : name,
            "picture"  : picture,
            "email"  :email,
            "provider" : provider,
            "googleId" : googleId,
            "isLoaded" : true
        })
        )
    }
    dispatch(setIsAuthenticated(true));	
    navigate('/create');
} catch (err) {
      dispatch(setIsAuthenticated(false));
			console.log(err);
		}
	};


  useEffect(()=>{
    getUser();
  }, [])
  

    

    return (
        <div className="main">
            <div className="left-box">
                <div
                    style={{ width: '90%', height: '70%', overflow: 'hidden' }}
                >
                    <h2 className="logo-title">Scriptor</h2>
                    <img src={Logo} alt="" className="image" />
                </div>
            </div>
            <div className="right-box">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '70%',
                        height: '70%',
                    }}
                >
                    <h4 className="signtext"> Get started</h4>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            height: 'auto',
                            width: '90%',
                        }}
                    >
                        <button className="google_btn" onClick={clickHandler}>
                            <BsGoogle className="btn-icon" />
                            <span>Continue with Google</span>
                        </button>
                        <button className="google_btn">
                            <BsGithub className="btn-icon" />
                            <span>Continue with Github</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
