
import './App.css';
import SideBar from './Components/Sidebar/Sidebar';
// import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/users" element={<></>} />
          <Route path="/messages" element={<></>} />
          

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
