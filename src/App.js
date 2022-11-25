import "./App.css";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Capsule from "./Component/Capsule/Capsule";
import Dragon from "./Component/Dragon/Dragon";
import Crew from "./Component/Crew/Crew";
import CrewInfo from "./Component/Crew/CrewInfo";
import Landpads from "./Component/Landpads/Landpads";
import SingleLandpads from "./Component/Landpads/singleLandpad";
import Footer from "../src/Home/Footer/Footer";
import Launches from "./Component/Launches/Launches";
import SingleLaunch from "../src/Component/Launches/SingleLaunch";
import StarLink from "./Component/StarLink/Starlink";
import Launchpad from "./Component/LaunchPads/Launchpad";
import SingleLaunchPad from "./Component/LaunchPads/singleLaunchPad";
import Rockets from "./Component/Rockets/Rockets";
import Ships from "./Component/Ships/Ships";
import SingleShips from "./Component/Ships/SingleShips";
import Payload from "./Component/Payload/Payload";
import Cores from "./Component/Cores/Cores";
import About from "./Component/About/Info";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/capsules" element={<Capsule />} />
        <Route exact path="/dragon" element={<Dragon />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/crew/:id" element={<CrewInfo />} />
        <Route exact path="/landpads/:id" element={<SingleLandpads />} />
        <Route exact path="/landpads" element={<Landpads />} />
        <Route exact path="/launches" element={<Launches />} />
        <Route exact path="/launches/:id" element={<SingleLaunch />} />
        <Route exact path="/starlinks" element={<StarLink />} />
        <Route exact path="/launchpads" element={<Launchpad />} />
        <Route exact path="/launchpads/:id" element={<SingleLaunchPad />} />
        <Route exact path="/roackets" element={<Rockets />} />
        <Route exact path="/ships" element={<Ships />} />
        <Route exact path="/ships/:id" element={<SingleShips />} />
        <Route exact path="/payloads" element={<Payload />} />
        <Route exact path="/cores" element={<Cores />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
