




import "./Faq.css";
import Faqcard from "./Faqcard";

import { netflixInfo } from "./faqdata";


const Faq = () => {
  return (
    <div className="faq-all">
        {
            netflixInfo.map((data,index)=>{
                return (
                    <>
                     <Faqcard data={data} index={index} className="faq-card" />
                    </>
                )
            })
        }
    </div>
  )
}

export default Faq