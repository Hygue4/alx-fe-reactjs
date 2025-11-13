import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '18px',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s',
  };

  return (
    <nav style={navStyle}>
      <Link
        to="/"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
      >
        About
      </Link>
      <Link
        to="/services"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#555')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
