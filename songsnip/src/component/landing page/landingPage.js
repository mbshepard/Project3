// import background from "../util/reviewBackground.jpg"
import "./style.css"
import { Link } from "react-router-dom";
const LandingPage = () => {
    return <div className="backgroundPic">

        <div id="title"></div> 

        <Link to="/newSongs">New Songs</Link>
<br/>yeaah
    </div>
}
export default LandingPage;


{/* <form>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputEmail4">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
  </div>
  <div class="form-group col-md-6">
    <label for="inputPassword4">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
  </div>
</div>
<div class="form-group">
  <label for="inputAddress">Address</label>
  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
</div>
<div class="form-group">
  <label for="inputAddress2">Address 2</label>
  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
</div>
<div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputCity">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="form-group col-md-4">
    <label for="inputState">State</label>
    <select id="inputState" class="form-control">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="form-group col-md-2">
    <label for="inputZip">Zip</label>
    <input type="text" class="form-control" id="inputZip">
  </div>
</div>
<div class="form-group">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="gridCheck">
    <label class="form-check-label" for="gridCheck">
      Check me out
    </label>
  </div>
</div>
<button type="submit" class="btn btn-primary">Sign in</button>
</form> */}