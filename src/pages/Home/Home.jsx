


import Navbar from "../../components/Navbar/Navbar"

import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play from "../../assets/play_icon.png"
import Info from "../../assets/info_icon.png"

// import TV from "../../assets/tv.png"
// import download from "../../assets/download.png"
// import telescope from "../../assets/telescope.png"
// import  profile from "../../assets/profile.png"
import "./Home.css"
import TitleCard from "../../components/TitleCard/TitleCard"
import Footer from "../../components/Footer/Footer"
import Features from "../../components/Features/Features"
import Faq from "../../components/faq/Faq"
const Home = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner_img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption_img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living in mordern Istanbul embarks on quest to save the city from immortal enemy
          </p>
          <div className="hero-btn">
            <button className="btn"><img src={play} alt="" />Play</button>
            <button className="btn dark-btn" ><img src={Info} alt="" />More Info</button>
          </div>

          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"BlockBuster Movie"} category={"top_rated"} />
        <TitleCard title={"Only On Netflix"} category={"popular"} />
        <TitleCard title={"Upcoming"} category={"upcoming"} />
        <TitleCard title={"Top Pics For You"} category={"now_playing"} />
      </div>
      <div className="features-main-container">
        <p className="more-feature-heading">More Reasons to Join...</p>
        <div className="features-all-card">
        <Features
          head="Enjoy on your TV"
          description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          // img = {TV}
        />
        <Features
          head="Download your shows to watch offline"
          description="Save your favourites easily and always have something to watch."
          // img = {download}
        />
        <Features
          head="Watch everywhere"
          description="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
          // img = {telescope}
        />

        <Features
          head="Create profiles for kids"
          description="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
          // img = {profile}
        />
        </div>
      </div>


      <div className="faq-container">
        <h6 className="faq-heading">Frequently Asked Questions        </h6>
        <Faq />
      </div>

      <Footer />
    </div>
  )
}

export default Home