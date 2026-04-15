import './Health.scss'

function Health(){
    return(
        <div className='hero'>
            <div className="hero-left">
          <h1>
            Your Health <br />
            <span>Our Responsibility</span>
          </h1>

          <p>
            Advanced healthcare with trusted doctors, modern technology
            and 24/7 emergency services.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Book Appointment</button>
            <button className="btn-secondary">Explore Services</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://c1.wallpaperflare.com/preview/451/179/819/the-device-hospital-surgery-ambulance.jpg"
            alt="doctor"
          />
        </div>
        </div>
    )
}
export default Health;