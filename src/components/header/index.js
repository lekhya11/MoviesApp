import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import "./index.css"

const Header = () => (
    <div>
      <div className="nav-bar"></div>
      <div className="nav-con">
     <div className="nav-2">
         <h1 className="heading">MOVIES</h1>
         <p className="nav-items">Home</p>
         <p className="nav-items">Popular</p>
     </div>
     <div className="nav-3">
       <FontAwesomeIcon icon={faMagnifyingGlass} className="search_icon" />
       <img src="https://res.cloudinary.com/ds79zalba/image/upload/v1729226220/Avatar_xvziup.jpg" className="img-icon" alt="avatar"/>
     </div>
     </div>
     </div>
)

export default Header