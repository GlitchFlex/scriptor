import { message } from 'antd';
import axios from 'axios';

import { useMutation, useQuery } from "react-query";


    

    export const createProject = async (project) => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/project/`, project, {
            withCredentials: true, // Include cookies in the request
          });
          message.success("Created!")
         
        } catch (err) {
          message.success("Couldnt create")
          console.error(err);
        }
      };
    export const getAllProject = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/project/all`, {
            withCredentials: true, // Include cookies in the request
          });
      
        
          return response.data;
        } catch (err) {
          console.error(err);
        }
      };
    export const getAllPublicProject = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/project/public`);
      
        
          return response.data;
        } catch (err) {
          console.error(err);
        }
      };


   
    export const getProjectById = async (id) => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/project/${id}`, {
            withCredentials: true, // Include cookies in the request
          });
      
         
          return response;
        } catch (err) {
          console.error(err);
        }
      };
    export const deleteProjectById = async (id) => {
        try {
          const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/project/${id}`, {
            withCredentials: true, // Include cookies in the request
          });
          message.success("deleted!")
        
          return response;
        } catch (err) {
          message.error("failed to delete")
          console.error(err);
        }
      };
    export const updateProjectById = async (id, project) => {
        try {
          const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/project/${id}`,project ,{
            withCredentials: true, // Include cookies in the request
          });
          message.success("updated succesfully")
          
      
          return response;
        } catch (err) {
          message.error("update failed")
          console.error(err);
        }
      };