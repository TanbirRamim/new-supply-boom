import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AddReview from "./Pages/AddReview";
import Blogs from "./Pages/Blogs";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MyOrders from "./Pages/MyOrders";
import MyPortfolio from "./Pages/MyPortfolio";
import NotFound from "./Pages/NotFound";
import Purchase from "./Pages/Purchase";
import RequireAuth from "./Pages/RequireAuth";
import SignUp from "./Pages/Signup";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="/myPortfolio" element={<MyPortfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/tool/:toolId"
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />} />
          <Route
            path="/myorders"
            element={
              <RequireAuth>
                <MyOrders />
              </RequireAuth>
            }
          />
          <Route
            path="/addreview"
            element={
              <RequireAuth>
                <AddReview />
              </RequireAuth>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
