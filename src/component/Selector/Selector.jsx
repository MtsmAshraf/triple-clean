import "./selector.css"

const Selector = ({options , title}) => {
  return (
    <div className="selector">
        <h3>{title}</h3>
        {options.map((option) => {
            return(
                <div></div>
            )
        })}
    </div>
  )
}

export default Selector