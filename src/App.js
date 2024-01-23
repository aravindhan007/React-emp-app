import "./App.css";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeeService from "./services/EmployeeService";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
  return (
    <Router>
      <div>
        <div>
          <HeaderComponent></HeaderComponent>
          <div>
            <Routes>
              <Route exact path="/" element={<EmployeeeService />} />
              <Route path="/employees" element={<EmployeeeService />} />
              <Route
                path="/add-employee"
                element={<CreateEmployeeComponent />}
              />
              <Route
                path="/add-employee/:id"
                element={<UpdateEmployeeComponent />}
              />
              <Route
                path="/view-employee/:id"
                element={<ViewEmployeeComponent />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
