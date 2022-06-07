import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Reviews from "./Pages/Reviews/Reviews";
import RequireAuth from "./Pages/Login/RequarAuth";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import AllUser from "./Pages/Dashboard/AllUser";
import Payment from "./Pages/Dashboard/Pyament";
import Notfound from "./Pages/Notfound/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="*" element={<Notfound />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyOrders />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route path="users" element={<AllUser />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
        </Route>

        {/* <Route
          path="/appointment"
          element={
            <RequireAuth>
              <AppointmentBanner />
            </RequireAuth>
          }
        />
         */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
