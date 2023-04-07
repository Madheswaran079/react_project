import React from 'react';
import {Link} from 'react-router-dom';

function About() {
    return (
      <div id='about' class='container-fluid'>
        <h1>About</h1>
        <br /><br /><br /><br /><br /><br />
        <p>Bajaj Auto is a leading Indian multinational two-wheeler and three-wheeler manufacturer, based in Pune, Maharashtra. The company was founded in 1945 by Jamnalal Bajaj and has since then become a renowned name in the automotive industry. With a strong focus on innovation, technology, and customer satisfaction, Bajaj Auto has established itself as a market leader in the Indian two-wheeler segment. The company's product portfolio includes a range of motorcycles, scooters, and three-wheelers, which are known for their superior quality, performance, and reliability. Bajaj Auto has a presence in over 70 countries, with manufacturing facilities located in India, Indonesia, and Austria. The company's commitment to sustainable development and environmental protection is reflected in its products and operations. Bajaj Auto has won several awards and accolades for its contributions to the automotive industry, including the prestigious Deming Prize for Total Quality Management.</p>
        <br /><br /><br /><br /><br /><br />
        <Link to='/' style={{color:'white'}}>Click to go Home</Link>      
      </div>
    );
  }

  export default About;