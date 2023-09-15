
import './App.css';
import SideBar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MutationCache, QueryClient, QueryClientProvider } from "react-query";
import CreateNew from './Pages/CreateNew/CreateNew';
import UpdateProject from './Pages/CreateNew/UpdateProject';
import Signin from './Pages/Singin/Signin';
import Home from './Pages/Home/Home';
import Public from './Pages/Public/Public';
 

//set up queryClient

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});



function App() {


  return (
    <QueryClientProvider client={queryClient}>

    <Router>
      
      
      <SideBar>
        <Routes>
          <Route path = "/" element = {<Signin/>}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/explore" element={<Public/>} />
          <Route path="/create" element={<CreateNew/>} />
          <Route path="/create/:id" element={<UpdateProject/>} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
      
      
      
    </Router>
    </QueryClientProvider>  
  );
}

export default App;
