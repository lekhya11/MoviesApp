import Header from "../header"
import "./index.css"

const Banner = () =>(
    <div>
       <div className="Home-con">
        {/* <div className="home-data"> */}
        <Header />
        <div className="banner-content">
          <h1 className="super">Super Man</h1>
          <p className="description">
             Superman is a fictional superhero who first appeared in
             American comic books published by DC Comics.
          </p>
       </div>
    </div>
       </div>
   //  </div>
)

export default Banner