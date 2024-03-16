import { useSelector } from "react-redux"
import "./book-btn.css"

export const BookBtn = () => {
  const language = useSelector(state => state.language.language)
  return (
    <div className="book-btn">
        {
          language === "arabic" ? <a href="#register">احجز الآن</a> : <a href="#register">Book now</a>
        }
        
    </div>
  )
}
