import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./social-icon.css"

const SocialIcon = ({icon}) => {
  return (
    <div className="social-icon">
        <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default SocialIcon