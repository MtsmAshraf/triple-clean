import "./hero.css"
import tripleCleanLogo from "../../assests/tri-logo-removebg-hd.png"
import { BookBtn } from "../BookBtn/BookBtn"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const Hero = () => {
    const language = useSelector(state => state.language.language)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 2000);
    })
  return (
    <div className={`hero` + (isLoaded ? ` loaded` : ``)}>
        <div className="container">
            {/* <div className="logo">
                <img src={tripleCleanLogo} alt="Triple Clean Logo" />
            </div>      */}
            <h1>
                Triple Clean
            </h1>
            {/* <p>
                Car cleaning is essential for maintaining the aesthetic appeal and longevity of your vehicle. Regular cleaning not only enhances its appearance but also helps to prevent corrosion and preserve its value
            </p>   */}
            {
                language === "arabic" ? 
                <p>
                    تعتبر عملية تنظيف السيارة أمراً أساسياً للحفاظ على جاذبيتها الجمالية وطول عمرها. فالتنظيف المنتظم لا يُعزز فقط مظهرها بل يساعد أيضاً في منع التآكل والحفاظ على قيمتها
                </p> : 
                <p>
                    The process of cleaning the car is considered essential to maintain its aesthetic appeal and prolong its lifespan. Regular cleaning not only enhances its appearance but also helps prevent corrosion and preserve its value
                </p> 
                            }
            <BookBtn />
        </div>
    </div>
  )
}
