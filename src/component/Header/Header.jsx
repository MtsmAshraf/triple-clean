import "./header.css"
import tripleCleanLogo from "../../assests/tri-logo-removebg-hd.png"
import grandHyatt from "../../assests/WhatsApp Image 2024-03-15 at 00.18.13.jpeg"
import { BookBtn } from "../BookBtn/BookBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../../store/themeSlice/themeSlice"
import { useEffect } from "react"
const Header = () => {

  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const toggleMode = () => {
    dispatch(toggleTheme());
  };
  let root = document.querySelector(":root")
  
  useEffect(() => {
    if(isDarkMode){
        root.style.setProperty("--bg-color","#0f0e16")
        root.style.setProperty("--header-bg","#0f0e163b")
        root.style.setProperty("--text-color","white")
        root.style.setProperty("--main-color","#0000fc")
        root.style.setProperty("--icon-bg", "#24232e")
        root.style.setProperty("--option-bg", "rgba(97, 97, 97, 0.2)")
        root.style.setProperty("--main-form-bg", "rgb(0,0,0, 0.6)")
    }else if(!isDarkMode){
        root.style.setProperty("--bg-color","#eee")
        root.style.setProperty("--header-bg","#eeeeee5f")
        root.style.setProperty("--text-color","black")
        root.style.setProperty("--main-color","#0000fc")
        root.style.setProperty("--icon-bg", "#adadad")
        root.style.setProperty("--option-bg", "rgba(97, 97, 97, 0.2)")
        root.style.setProperty("--main-form-bg", "rgba(220, 220, 220, 0.6)")
    }

  })


  return (
    <header className='header'>
        <div className="container">
              <div>
                <BookBtn />
                <div className="customize">
                  <div className="change-mode" onClick={() => {toggleMode()}}> 
                      <span>
                          {
                            isDarkMode ? <FontAwesomeIcon icon={faSun} className="sun"/> : <FontAwesomeIcon icon={faMoon}  className="moon"/>
                          }
                      </span>
                  </div>
                  <div className="change-language">
                      <span language="en" name="change-lang-icon" >
                          ع
                      </span>
                      <span language="ar" name="change-lang-icon" >
                          En
                      </span>
                  </div>
                </div>
              </div>
              {/* <div className="logo grand">
                <img src={grandHyatt} alt="Grand Hyatt Logo" />
              </div> */}
              <div className="logo tripple">
                <img src={tripleCleanLogo} alt="Triple Clean Logo" />
              </div>
        </div>
    </header>
  )
}

export default Header