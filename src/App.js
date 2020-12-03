import Particles from 'react-particles-js';
import React , { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'dd91e4203deb4b1495e3e65ab6a5ed75'
 });



const particlesOptions = {

  particles: {
    number:{
      value:130,
      density:{
        enable:true,
        vaue_area:800
      }
    }
    }
  }





class App extends Component {

  constructor(){


    super();
    this.state = {

      input: '',
      imageUrl: '',
      box:[]
    }
  }
  calculateFaceLocation = (data, i) => {
    let clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
    let image = document.getElementById('inputimage');
    let width = Number(image.width);
    let height = Number(image.height);
    console.log(data);
    return {
      leftcol: clarifaiFace.left_col * width,
      toprow: clarifaiFace.top_row * height,
      rightcol: width - (clarifaiFace.right_col * width),
      bottomrow: height - (clarifaiFace.bottom_row * height)
      
    }
}

displayFaceBox = (box) => {
  this.setState({
    box: [...this.state.box, box]
  });
}

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onButtonSubmit = () => {
  this.setState({
    box: [],
    imageUrl: this.state.input,
    showImage: true
  });

  app.models.predict(
    Clarifai.FACE_DETECT_MODEL, 
    this.state.input)
  .then(response => {
    for(let i = 0; i < response.outputs[0].data.regions.length; i++){
      this.displayFaceBox(this.calculateFaceLocation(response,i))
    }
    
    
    
  }
  )
  .catch(err => console.log(err));
}
      
  
  render()
  {
    return(
    <div className="App">
       <Particles className = 'particles' 
              params={particlesOptions}
            />
    <Navigation/>
     <Logo/>
     <Rank/>
     <ImageLinkForm 
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} showImage={this.state.showImage}/>

    </div>
  );
}
}

export default App;
