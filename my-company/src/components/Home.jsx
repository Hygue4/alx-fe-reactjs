function Home() {
  const homeStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '400px',
  };

  return (
    <div style={homeStyle}>
      <h1 style={{ color: '#333' }}>Welcome to Our Company</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

export default Home;
