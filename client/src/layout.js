import { BrowserRouter as Router, Route } from "react-router-dom";
// import App from "./App";
import Top from "./component/top/top";
import Root from "./pages/rootPage";
import 'bootstrap/dist/css/bootstrap.min.css'


const Layout = () => {
    return (<div className="App">
        <Router>
            <Top />
            <div style={{ height: "calc(100vh - 120px)", }}>
                {/* <App /> */}
                <Root />
            </div>
            </Router>
    </div>);
}

export default Layout;