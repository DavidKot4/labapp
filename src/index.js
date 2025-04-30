import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import Card from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Navbar/>
    <App />

  {/* Container for cards */}
    <div className="card-container" >
      <Card title="The Future of AI: Revolutionizing Industries" text="Dive into the latest developments in AI and how they are transforming industries like healthcare, 
      finance, and entertainment. Explore the ethical challenges and potential breakthroughs coming soon!" buttonText="Read More"/>
      <Card title="Introducing the SmartWatch Pro" text="A sleek, modern smartwatch with advanced features displayed. Description: The SmartWatch Pro is here to redefine your fitness journey. With real-time heart rate tracking, sleep analysis, and on-the-go notifications, 
      it’s the ultimate device for staying connected and healthy." buttonText="Pre-order Now"/>
      <Card title="AI & Innovation Conference 2025" text="Join us for a 3-day immersive experience where industry leaders, researchers, and entrepreneurs will explore the latest 
      AI technologies and their real-world applications." buttonText="Register Today"/>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
