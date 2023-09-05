
import './App.css';
import SideBar from './Components/Sidebar/Sidebar';
// import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateNew from './Pages/CreateNew/CreateNew';

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<></>} />
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
