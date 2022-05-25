import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Blogs from "./Pages/Blogs";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyPortfolio from "./Pages/MyPortfolio";
import NotFound from "./Pages/NotFound";
import SignUp from "./Pages/Signup";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
