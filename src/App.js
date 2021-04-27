import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { MainVideo } from "./components/mainvideo/MainVideo";
import Suggestion from "./components/suggestion/Suggestion";
import Comments from "./components/comments/Comments";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />

      <div className="row">
        <MainVideo />
        <Suggestion />
      </div>
      <Comments/>
      <Footer/>
    </div>
  );
}

export default App;
