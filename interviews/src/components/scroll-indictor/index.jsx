import { useEffect, useState } from "react"
import "./scroll.css"


export default function ScrollIndicator({url}) {

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [scrollPercent, setScrollPercent] = useState(0);

    async function fetchData(getUrl) {
        try{
            setLoading(true);
            const response = await fetch(getUrl)
            const data = await response.json();


            if(data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }

        }catch(e){
            console.log(e)
            setErrorMessage(e.message)
        }
    }

    function handleScrollPercent() {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercent((howMuchScrolled/height) * 100)
    }

    useEffect(() => {
        fetchData(url)
    }, [url])
    useEffect(()=> {
        window.addEventListener('scroll', handleScrollPercent);

        return () => {
            window.removeEventListener('scroll', ()=>{})
        }
    })
    
    console.log(data, scrollPercent)
    
    if(errorMessage){
        return<>
            {errorMessage}
        </>
    }

    if(loading){
        return <div> Data Loading, please wait</div>
    }

    return <div>
        <div  className="top-container">
            <h1>Custon Scroll Indicator</h1>
            <div className="scroll-tracking-container">
                <div className="current-progress-bar" style={{width : `${scrollPercent}%`}}></div>
            </div>
        </div>
        <div className="data-container">
                {data && data.length > 0
                ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
                : null}
            </div>
        
    </div>
}