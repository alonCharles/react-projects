import { useState } from "react"
import data from "./data"
import "./styles.css"

export default function Accordian() {

    const [selected, setSelected] = useState(null)
    const [enableMulti, setEnableMulti] = useState(false)
    const [multi, setMulti] = useState([])

    function handlingSingleSelection(getCurrentId) {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelect(getCurrentId) {
        let multiCopy = [...multi]
        const findIndex = multiCopy.indexOf(getCurrentId)
        console.log(findIndex)
        if(findIndex === -1){
            multiCopy.push(getCurrentId)
        } else {
            multiCopy.splice(findIndex, 1)
        }

        setMulti(multiCopy)
    }
    console.log(selected, multi)

    return <div className="wrapper">
        <button onClick={()=> setEnableMulti(!enableMulti)}>
            Enable Multi-Selection
            </button>
        <div className="accordian">
            {
                data && data.length > 0 ? data.map(dataItem => <div key={dataItem.id} className="item">
                    <div onClick={
                    enableMulti
                        ?()=> handleMultiSelect(dataItem.id)
                        :()=> handlingSingleSelection(dataItem.id)}
                        className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        selected === dataItem.id ||
                         multi.indexOf(dataItem.id) !== -1 ? (
                         <div className="content">{dataItem.answer}</div>) : null
                    }
                </div>) : <div> No data</div>
            }
        </div>
    </div>
}