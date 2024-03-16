import "./loader.css"
import tripleLogo from "../../assests/tri-logo-removebg-hd.png"
import { useEffect, useState } from "react"
const Loader = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isFaded, setIsFaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 1000);
        setTimeout(() => {
            setIsFaded(true)
        }, 2000);
    })
  return (
    <div className={`loader` + (isFaded ?  ` faded` : "") + (isLoaded? ` loaded` : "") }>
        <div className="img">
            <img src={tripleLogo} alt="Triple Clean logo" />
            <div className="loader-bar one">
            </div>
            <div className="loader-bar two">
            </div>
        </div>
    </div>
  )
}

export default Loader