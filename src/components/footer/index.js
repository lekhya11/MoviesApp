import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faGoogle, faYoutube} from "@fortawesome/free-brands-svg-icons";

import "./index.css"

const  Footer = () => (
    <div className="main-con">
       <div className="icons-con">
          <FontAwesomeIcon icon={faGoogle} className="icon"/>       
          <FontAwesomeIcon icon={faTwitter} className="icon"/>
          <FontAwesomeIcon icon={faInstagram} className="icon"/>
          <FontAwesomeIcon icon={faYoutube} className="icon"/>
       </div>
       <p>Contact Us</p>
      </div>
     
)
export default Footer