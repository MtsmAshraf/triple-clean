import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./main-form.css"
import { faCar, faMotorcycle, faRandom, faTruckPickup } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import questionMark from "../../assests/simone-secci-49uySSA678U-unsplash.jpg"
import perfumeData from "../../assests/perfumes-data.json"
const MainForm = () => {
  return (
    <form className="main-form" id="register">
        <h1>احجز الآن</h1>
        <div>
            <h3>نوع الغسيل</h3>
            <div className="selectors-wrapper">
                <div>
                    <input type="radio" id="outside-inside" name="clean_type" value="outside-inside"/>
                    <label htmlFor="outside-inside">خارجي وداخلي</label>
                </div>
                <div>
                    <input type="radio" id="outside" name="clean_type" value="outside" />
                    <label htmlFor="outside">خارجي فقط</label>
                </div>
                <div>
                    <input type="radio" id="inside" name="clean_type" value="inside" />
                    <label htmlFor="inside">داخلي فقط</label>
                </div>
            </div>
        </div>
        <div>
            <h3>نوع السيارة</h3>
            <div className="selectors-wrapper">
                <div>
                    <input type="radio" id="big-car" name="car_type" value="big-car" />
                    <label htmlFor="big-car">
                        <FontAwesomeIcon icon={faTruckPickup} />
                        <span>
                            سيارة كبيرة
                        </span>
                    </label>
                </div>
                <div>
                    <input type="radio" id="small-car" name="car_type" value="small-car" />
                    <label htmlFor="small-car">
                        <FontAwesomeIcon icon={faCar} />
                        <span>
                            سيارة صغيرة
                        </span>
                    </label>
                </div>
                <div>
                    <input type="radio" id="motorcycle" name="car_type" value="motorcycle" />
                    <label htmlFor="motorcycle">
                        <FontAwesomeIcon icon={faMotorcycle} />
                        <span>
                            دراجة نارية
                        </span>
                    </label>
                </div>
            </div>
        </div>
        <div>
            <h3>نوع العطر</h3>
            <div className="perfumes-wrapper">
                {
                perfumeData.map((perfume) => {
                    return(
                        <div className="perfume" key={perfume.id}>
                            <input type="radio" id={perfume.name} name="perfume_type" value={perfume.name} />
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
            <label htmlFor="client-name">الاسم</label>
            <input type="text" name="client-name" id="client-name" placeholder="الاسم"/>
        </div>
        <div className="typing-input numeric">
            <div>
                <label htmlFor="client-phone">رقم الهاتف</label>
                <input type="number" name="client-phone" id="client-phone" placeholder="رقم الهاتف"/>
            </div>
            <div>
                <label htmlFor="room-number">رقم الغرفة</label>
                <input type="number" name="room-number" id="room-number" placeholder="رقم الغرفة"/>
            </div>
        </div>
        <div className="typing-input">
            <label htmlFor="client-notes">ملاحظات</label>
            <textarea name="notes" id="client-notes" placeholder="ملاحظات"></textarea>
        </div>
        <button onClick={(e) => {e.preventDefault();}}>
            إرسال
        </button>
    </form>
  )
}

export default MainForm