import React from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{

    return (

        <div>
        <p className= 'f3'>
            {'This Face Detection app will detect faces in your pics'}
        </p>
        <div className = 'center'>
        <div className = 'form center pa3 ph2 br3 shadow-5'>
        <input className = 'f4 pa2 w-80 center ' placeholder="Paste the image url" type = 'tex' onChange={onInputChange}/>
        <button className = 'w-15 f4 link ph3 pv2 pointer dib purple bg-dark-purple'

        onClick={onButtonSubmit}
        
        >Detect</button>
        </div>
        </div>
        </div>
        
    );
}

export default ImageLinkForm;