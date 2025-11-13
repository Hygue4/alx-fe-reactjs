function About() {
  const aboutStyle = {
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '400px',
  };

  return (
    <div style={aboutStyle}>
      <h1 style={{ color: '#333' }}>About Us</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy.
      </p>
    </div>
  );
}

export default About;
