import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/user/user:Id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
