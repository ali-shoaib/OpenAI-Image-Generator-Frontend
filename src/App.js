import { Route, Routes } from "react-router-dom";
import CreatePost from "./pages/createPost";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/create-image" element={<CreatePost/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
