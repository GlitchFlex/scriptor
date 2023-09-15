import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    "id" : "",
    "name" : "",
    "picture"  : "",
    "email"  :"",
    "provider" : "",
    "googleId" : "",
    "isLoaded" : null
};


export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
      setIsAuthenticated: (state, payload ) => {
        state.isAuthenticated = payload;
      },
      setUser: (state, payload ) => {
        // console.log("payload",payloadpayload..payload);

        state.id = payload.payload.id;
        state.name = payload.payload.name;
        state.email = payload.payload.email;
        state.provider = payload.payload.provider;
        state.picture = payload.payload.picture;
        state.googleId = payload.payload.googleId;
        state.isLoaded = payload.payload.isLoaded;

       
      },
      resetUser: (state) => Object.assign(state, initialState),
    },
  });

  export const userSelector = (state) => state.user;
export const { setIsAuthenticated, setUser, resetUser } = userSlice.actions;
