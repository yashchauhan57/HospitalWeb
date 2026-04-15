import'./Header.scss'


function Header() {
  return (
    <>
      <header className="navbar">
        <div className="logo">🏥 MediCare+</div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Doctors</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className="btn-primary">Appointment</button>
      </header>
    
    </>
  );
}

export default Header;