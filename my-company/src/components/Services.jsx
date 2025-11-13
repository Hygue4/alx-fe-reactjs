function Services() {
  const servicesStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '400px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    backgroundColor: 'white',
    margin: '10px 0',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  };

  return (
    <div style={servicesStyle}>
      <h1 style={{ color: '#333' }}>Our Services</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>Technology Consulting</li>
        <li style={listItemStyle}>Market Analysis</li>
        <li style={listItemStyle}>Product Development</li>
        <li style={listItemStyle}>Digital Marketing</li>
        <li style={listItemStyle}>Customer Support</li>
      </ul>
    </div>
  );
}

export default Services;
