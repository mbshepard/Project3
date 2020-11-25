import useEffect from "react"
import { Link } from "react-router-dom";
import "./listen.css"

const Listen = () => {

  const getCurrentX = (e) => {
    let right = e.clientX
    console.log(right)
  }
  const resize = (e) => {
  }

  return (
    <div>
      <Link to="/"> Home </Link>
      <h1>Analysis Page</h1>

      <div class="card text-center">
        <div class="card-header">Song Title</div>
        <div class="song-container">
          <div class="song-box">
            <div class="selector">
              <div class="selector-left" >
              </div>
              <div class="selector-right" onMouseEnter={getCurrentX} onMouseDrag={resize}>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <input placeholder="Drag here" />
          <span class="badge badge-primary badge-pill">metephore</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <input placeholder="Drag here" />

          <span class="badge badge-primary badge-pill">punchline</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <input placeholder="Drag here" />

          <span class="badge badge-primary badge-pill">Feel</span>
        </li>
      </ul>
    </div>
  );
};
export default Listen;
