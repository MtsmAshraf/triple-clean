import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./footer.css"
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons"
import SocialIcon from "../SocialIcon/SocialIcon"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import tripleCleanLogo from "../../assests/tri-logo-removebg-hd.png"
import { useSelector } from "react-redux"

const Footer = () => {
    const language = useSelector(state => state.language.language)
  return (
    <footer>
        <div className="container">
            <div className="logo tripple">
                <img src={tripleCleanLogo} alt="Triple Clean Logo" />
            </div>
            {
                language === "arabic" ?
                <h3>للاستفسارات</h3>
                :
                <h3>For Questions</h3>
            }
            <ul>
                <li>
                    <a href="#">
                        <SocialIcon icon={faPhone} />
                    </a>
                </li>
                <li>
                    <a href="#"  style={{fontSize: "20px"}}>
                        <SocialIcon icon={faWhatsapp} />
                    </a>
                </li>
                <li>
                    <a href="#red">
                        <SocialIcon icon={faMessage} />
                    </a>
                </li>
            </ul>
        </div>        
    </footer>
  )
}

export default Footer