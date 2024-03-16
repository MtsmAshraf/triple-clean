import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./main-form.css"
import { faCar, faMotorcycle, faRandom, faTruckPickup } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import questionMark from "../../assests/simone-secci-49uySSA678U-unsplash.jpg"
import perfumeData from "../../assests/perfumes-data.json"
import { useSelector } from "react-redux"
const MainForm = () => {
    const language = useSelector(state => state.language.language);
    useEffect(() => {
        let form = document.querySelector("form")
        let formChildren = document.querySelectorAll("form > *")
        window.addEventListener("scroll", () => {
            if(window.scrollY >= form.offsetTop - 200){
                form.style.cssText = `
                    transform: translateY(0px);
                    opacity: 1;
                `
            }
            formChildren.forEach((child) => {
                if(window.scrollY >= child.offsetTop - 200){
                    child.style.cssText = `
                        transform: translateY(0px);
                        opacity: 1;
                    `
                }
            })
        })
    })
  return (
    <form className={`main-form`} id="register" language={language}>
        {
            language === "arabic" ? <h1>احجز الآن</h1> : <h1>Book now</h1>
        }
        <div>
            {
                language === "arabic" ? 
                <h3>نوع الغسيل</h3>
                :
                <h3>Cleaning Type</h3>
            }
            <div className="selectors-wrapper">
                <div>
                    <input type="radio" required id="outside-inside" name="clean_type" value="outside-inside"/>
                    {
                        language === "arabic" ?  
                        <label htmlFor="outside-inside">خارجي وداخلي</label> 
                        :  
                        <label htmlFor="outside-inside">External & Internal</label>
                
                    }
                </div>
                <div>
                    <input type="radio" required id="outside" name="clean_type" value="outside" />
                    {
                        language === "arabic" ?  
                        <label htmlFor="outside">خارجي فقط</label> 
                        :  
                        <label htmlFor="outside">External only</label>
                    }
                </div>
                <div>
                    <input type="radio" required id="inside" name="clean_type" value="inside" />
                    {
                        language === "arabic" ?  
                        <label htmlFor="inside">داخلي فقط</label> 
                        :  
                        <label htmlFor="inside">Internal only</label>
                    }
                </div>
            </div>
        </div>
        <div>
            {
                language === "arabic" ? 
                <h3>نوع السيارة</h3>
                :
                <h3>Car Type</h3>
            }
            <div className="selectors-wrapper">
                <div>
                    <input type="radio" required id="big-car" name="car_type" value="big-car"/>
                    <label htmlFor="big-car">
                        <FontAwesomeIcon icon={faTruckPickup} />
                        {
                            language === "arabic" ? 
                            <span>
                                سيارة كبيرة
                            </span>
                            :
                            <span>
                                Big Car
                            </span>
                        }
                    </label>
                </div>
                <div>
                    <input type="radio" required id="small-car" name="car_type" value="small-car" />
                    <label htmlFor="small-car">
                        <FontAwesomeIcon icon={faCar} />
                        {
                            language === "arabic" ? 
                            <span>
                                سيارة صغيرة
                            </span>
                            :
                            <span>
                                Small Car
                            </span>
                        }
                    </label>
                </div>
                <div>
                    <input type="radio" required id="motorcycle" name="car_type" value="motorcycle" />
                    <label htmlFor="motorcycle">
                        <FontAwesomeIcon icon={faMotorcycle} />
                        {
                            language === "arabic" ? 
                            <span>
                                دراجة نارية                                
                            </span>
                            :
                            <span>
                                Motorcycle
                            </span>
                        }
                    </label>
                </div>
            </div>
        </div>
        <div>
            {
                language === "arabic" ? 
                <h3>نوع العطر</h3>
                :
                <h3>Perfume Type</h3>
            }
            <div className="perfumes-wrapper">
                {
                perfumeData.map((perfume) => {
                    return(
                        <div className="perfume" key={perfume.id}>
                            <input type="radio" required id={perfume.name} name="perfume_type" value={perfume.name} />
                            <label htmlFor={perfume.name}>
                                <div className="img">
                                    <img src={perfume.imgUrl} alt="" />
                                </div>
                                <span>
                                    {perfume.name}
                                </span>
                            </label>
                        </div>
                    )
                })
                }
            </div>
        </div>
        <div className="typing-input">
            {
                language === "arabic" ? 
                <label htmlFor="client-name">الاسم</label>
                :
                <label htmlFor="client-name">Name</label>
            }
            <input type="text" name="client-name" id="client-name" placeholder={language === "arabic" ? "الاسم" : "Name"}/>
        </div>
        <div className="typing-input numeric">
            <div>
            {
                    language === "arabic" ? 
                    <label htmlFor="client-phone">الهاتف</label>
                    :
                    <label htmlFor="client-phone">Phone</label>
                }                
                <input type="number" name="client-phone" id="client-phone" required  placeholder={language === "arabic" ? "رقم الهاتف" : "Phone number"}/>
            </div>
            <div>
                {
                    language === "arabic" ? 
                    <label htmlFor="room-number">رقم الغرفة</label>
                    :
                    <label htmlFor="room-number">Room Number</label>
                }
                <input type="number" name="room-number" id="room-number" required placeholder={language === "arabic" ? "رقم الغرفة" : "Room number"}/>
            </div>
        </div>
        <div className="typing-input">
            {
                language === "arabic" ? 
                <label htmlFor="client-notes">ملاحظات</label>
                :
                <label htmlFor="client-notes">Notes</label>
            }
            <textarea name="notes" id="client-notes" placeholder={language === "arabic" ? "ملاحظات" : "Notes"}></textarea>
        </div>
        <button onClick={(e) => {}}>
            {
                language === "arabic" ? 
                <span>
                    إرسال
                </span>
                :
                <span>
                    Send
                </span>
            }
        </button>
    </form>
  )
}

export default MainForm