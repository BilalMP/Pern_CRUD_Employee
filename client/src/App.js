import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"
import Home from "./pages/Home"
import AddEmployee from "./pages/AddEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-employee" element={<AddEmployee />} />
          <Route path="/view-employee/:employeeId" element={<ViewEmployee />} />
          <Route path="/edit-employee/:employeeId" element={<EditEmployee />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
