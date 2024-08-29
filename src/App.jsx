import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./screen/component/Dashboard";
import Sidebar from "./screen/component/Sidebar";
import Logout from "./screen/pages/Logout";
import Dealer from "./screen/pages/Dealer";
import Dealerdetail from "./screen/pages/Dealerdetail";
import Order from "./screen/pages/Order";
import Pricelist from "./screen/pages/Pricelist";
import Report from "./screen/pages/Report";
import Booking from "./screen/pages/Booking";
import Notification from "./screen/pages/Notification";
import Payment from "./screen/pages/Payment";
import Rating from "./screen/pages/Rating";
import Setting from "./screen/pages/Setting";
import User from "./screen/pages/User";

function App() {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dealer" element={<Dealer />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Pricelist" element={<Pricelist />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Rating" element={<Rating />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/User" element={<User />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Dealerdetail" element={<Dealerdetail />} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
