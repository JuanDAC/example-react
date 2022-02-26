import { AddKPI } from './pages/add-kpi/Add-kpi';
import { AddPime } from './pages/add-pime/Add-pime';
import { Dashboard } from './pages/dashboard/Dashborad';
import { Login } from './pages/login/Login';
import { Header } from './componets/header/Header';


import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/add-pime" element={<AddPime/>}/>
        <Route path="/add-kpi" element={<AddKPI/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}


export default App;
