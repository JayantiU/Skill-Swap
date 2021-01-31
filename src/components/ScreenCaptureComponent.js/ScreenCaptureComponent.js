import React, {useEffect}, {Component} from 'react';
import './ScreenCaptureComponent.css'

class ScreenCaptureComponent extends Component(){
    
    render(){
        return(
            <div>
                <h1>ScreenCaptureComponent</h1> 
                <span><button id = 'start'>Start Capture</button>&nbsp;</span>
                
                <button id = 'stop'>Stop Capture</button>
                <video id='video' autoPlay></video>
            </div>
        )
    }
}
export default ScreenCaptureComponent;
    

    // start.addEventListener("click", (e) => {
    //     startCapture()
    // })
    // stop.addEventListener("click", (e) => {
    //     stopCapture()
    // })

    // async function startCapture(){
    //     try{
    //         videoElement.srcObject = await navigator.mediaDevices.getUserMedia('displayMediaOptions')
    //     }
    //     catch(err){
    //         console.log("error" + err);
    //     }
    // }
    
    
   
   
      



