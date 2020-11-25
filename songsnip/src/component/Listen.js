import { Link } from "react-router-dom";


const Listen = () => {

    return <div>
        <Link to="/"> Home </Link>
        <h1>Analysis Page</h1>

        <div class="card text-center">
            <div class="card-header">
                Featured
         </div>
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
            <div class="card-footer text-muted">
                
         </div>
        </div>
        <ul class="list-group">
  <li  class="list-group-item d-flex justify-content-between align-items-center">
    <input placeholder="Drag here"/>
    <span class="badge badge-primary badge-pill">metephore</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <input placeholder="Drag here"/>

    <span class="badge badge-primary badge-pill">punchline</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <input placeholder="Drag here"/>

    <span class="badge badge-primary badge-pill">Feel</span>
  </li>
</ul>
    </div>
}
export default Listen;