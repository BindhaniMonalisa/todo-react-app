
import tick from "./Assets/tick.png"
import not_tick from "./Assets/not_tick.png"
import cross from "./Assets/cross.png"

const TodoItems = ({no,display,text}) => {
  return (
    <div className="todoitems"       style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      borderBottom: "1px solid #ccc",
    }}>
      <div className="todoitems-container"  style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
        <img src={not_tick} alt=""style={{ width: "20px", height: "20px", cursor: "pointer" }}/>
        <img src={tick} alt=""style={{ width: "20px", height: "20px", cursor: "pointer" }} />
        <div className="todoitems-text" style={{ fontSize: "16px", color: "#333" }}>{text}</div>
      </div>
      <img src={cross} alt="" style={{ width: "20px", height: "20px", cursor: "pointer" }}/>
    </div>
  )
}

export default TodoItems