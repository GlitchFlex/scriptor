import React, { useEffect, useState } from 'react'
import './Home.css';
import { Input } from 'antd';
import { VscSearch } from 'react-icons/vsc';
import { getAllProject } from '../../API/Project';
import Loader from '../../Components/Loader/Loader';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
// import { getAllProject } from '../../API/Project';

function Home() {

  const [projects, setProjects] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [searchRes, setSearchRes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllProject();
        setProjects(res);
        setShouldFetch(false);
      } catch (error) {
        // Handle the error here, e.g., display an error message to the user
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [shouldFetch]);

  const searchHandler = (e)=>{
    if(e.target.value.length > 2 && projects){
      let searchArr =[];
      projects?.data.forEach((project)=>{
        if(project.name.toLowerCase().includes(e.target.value)){
          searchArr.push(project);
        }
      })

      setSearchRes([...searchArr]);

      if(searchArr.length === 0){
        setSearchRes("NA");
      }

    }
    else{
      setSearchRes();
    }
  }

  // console.log(projects);

  return (
    <div className='home-box'>
        <div className='inputBox'>
        <input type="text" placeholder='Search your drafts' className='searchBox' onChange = {searchHandler} />
        <div className='iconBox'>
        <VscSearch className='searchIcon'/>

        </div>
        </div>

        {!projects &&
            <div style={{ width  : "100%", height : "80%", justifyContent : "center", alignItems : "center", display  : "flex"}}>
              <Loader/>
            </div>
          }
        <div className='projectBox'>

          {!searchRes && 
            projects?.data?.map((element)=>
            <ProjectCard element = {element}  setShouldFetch = {setShouldFetch}/>
          )
          }

          {searchRes === "NA" && 
            <h1>No project found</h1>
          }

          {searchRes && searchRes !== "NA" && 
             
              searchRes?.map((element)=>
                <ProjectCard element = {element}  setShouldFetch = {setShouldFetch}/>
              )
    
              
          }

          
        </div>
    </div>
    // </div>
  )
}

export default Home