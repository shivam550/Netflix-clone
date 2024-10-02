

import "./Features.css"

const Features = (props) => {
    const {head,description,img} = props;
  return (
    <div className="features-card">
      <h6 className="feature-heading">{head}</h6>
      <p className="feature-desc">{description}</p>
      {/* <img src={img} alt="" className="card-img" /> */}
    </div>
  )
}

export default Features;