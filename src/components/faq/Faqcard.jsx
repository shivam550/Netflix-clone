import { act, useState } from "react";
import "./Faq.css";

const Faqcard = ({data,index}) => {
    const [active , setActive] = useState(false);
  return (
    <>
    <div className="faqcard">
        <div className="faq-question" onClick={()=>{setActive(!active)}}>
            
             <p>{data.question}</p>
              <p className="faq-icon">{active ? "-" : "+"}</p>
        </div>
        <div className="faq-answer">
           {active && <p>{data.answer}</p>}
        </div>
    </div>
    </>
  )
}

export default Faqcard;