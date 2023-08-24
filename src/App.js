import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Beers from "./Beers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginPage}/>
        <Route path="/Beers" Component={Beers}/>
      </Routes>
    </Router>
    
  );
}

export default App;
