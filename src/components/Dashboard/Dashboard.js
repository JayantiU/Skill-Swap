import React from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';


function Dashboard() {

  return (
    <div class='landing-container'>
        <Link to="/video">
            <Button className="video_button"> 
                Join Video
            </Button>
        </Link>
      
      
      <Button className="pref_button">
        Preferences
      </Button>
    </div>
    
  ); 
}

export default Dashboard;
