import React from 'react';
import Tilt from 'react-tilt';
import facedetect from './face detection.png';
import './Logo.css';
const Logo = () =>{

    return (

        <div className= 'ma3 mt0'>
<Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 152, width: 150 }} >
 <div className="Tilt-inner pa12"> <img style = {{paddingTop:'2px'}} src = {facedetect} alt = 'logo'></img></div>
</Tilt>
        </div>

    );
}

export default Logo;