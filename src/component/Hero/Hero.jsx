import "./hero.css"
import tripleCleanLogo from "../../assests/tri-logo-removebg-hd.png"
import { BookBtn } from "../BookBtn/BookBtn"

export const Hero = () => {
  return (
    <div className="hero">
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
            <p>
                تعتبر عملية تنظيف السيارة أمراً أساسياً للحفاظ على جاذبيتها الجمالية وطول عمرها. فالتنظيف المنتظم لا يُعزز فقط مظهرها بل يساعد أيضاً في منع التآكل والحفاظ على قيمتها.
            </p> 
            <BookBtn />
        </div>
    </div>
  )
}