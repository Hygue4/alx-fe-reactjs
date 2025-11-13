function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Our Company. All rights reserved.</p>
      <p>Contact: info@ourcompany.com | Phone: (123) 456-7890</p>
    </footer>
  );
}

export default Footer;
