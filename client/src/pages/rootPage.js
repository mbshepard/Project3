import {Route} from "react-router-dom";
import Analyze from "./analyze";
import DetailedPage from "./detailedPage";
import LandingPage from "./landingPage";
import Listen from "./Listen";
import Review from "./review";


const Root = () => {
    return  <div>
         {/* <Route exact path="/" component={LandingPage} /> */}
         <Route exact path="/landingpage" component={LandingPage} />
        <Route exact path="/analyze" component={Analyze} />
        <Route exact path="/listen" component={Listen} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/detailed" component={DetailedPage} />
        
    </div>

}
 
export default Root;

{/* <Route exact path="/" component={Authentication} /> */}