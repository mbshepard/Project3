import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Songs from "./Components/NewSongs/Songs"
import NewSongs from "./Components/NewSongs/NewSongs"
import songsArry  from './songList.json'
import Landing from "./Components/Landing Page/Landing"
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/newsongs" component={Songs}/>
          {/* <Songs data={songsArry} /> */}
          {/* </Route>
          
          <Route exact path="/songs" >
          <Songs data={songsArry} /> */}
          {/* </Route> */}
       
      </div>
    </Router>

    </div>
  );
}

export default App;
