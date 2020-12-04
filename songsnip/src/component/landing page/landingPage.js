// import background from "../util/reviewBackground.jpg"
import "./style.css"
import { Link } from "react-router-dom";
const LandingPage = () => {
    return <div className="backgroundPic">
            <div id="title"></div> 
            <div id="form">
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="form-group col-md-8">
                                <input type="text" className="form-control" placeholder="First name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-8">
                                <input type="text" className="form-control" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-8">
                                <input type="email" className="form-control" placeholder="Email" id="inputEmail4"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-8">
                                <input type="password" className="form-control" placeholder="Password" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <button type="submit" className="btn btn-primary">Create New User</button>
                            </div>
                            <div className="form-group col-md-6">
                                <button type="submit" className="btn btn-primary">Already a User?</button>
                            </div>
                        </div>
                    </div>
                </form>  
            </div>        
       

        <Link to="/newSongs">New Songs</Link>
<br/>yeaah
    </div>
}
export default LandingPage;


