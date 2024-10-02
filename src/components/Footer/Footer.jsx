import "./Footer.css"

import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import insta_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"






const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={youtube_icon} alt="" className="footer-icon-img" />
        <img src={twitter_icon} alt="" className="footer-icon-img" />
        <img src={insta_icon} alt="" className="footer-icon-img" />
        <img src={facebook_icon} alt="" className="footer-icon-img" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preferences</li>
        <li>Co-operate Information</li>
        <li>Contact Us</li>
      </ul>

    <p className="copyright-text">
      Netflix India
    </p>
    </div>
  )
}

export default Footer;


