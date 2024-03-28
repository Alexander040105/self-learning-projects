import './slider.css'
import Student from './Student.jsx';
import spongebob from './assets/spongebob.png';
import patrick from './assets/patrick.png';
import squidward from './assets/squidward.jpg';
import nicoRobin from './assets/nico-robin.jpg';
import sliderLogic from './slider.js'
import React, { useEffect } from 'react';

function Slider(props){
    useEffect(() => {
        sliderLogic.initSlider(); // Call initSlider after mount
    }, []);


    return(
        <div className="experience" id="exps">
            <div className="container" >
                <div className="slider-wrapper">
                    <button id="prev-slide" className="slide-button material-symbols-outlined">chevron_left</button>
                            
                    <div className="image-list">
                        <Student name="Spongebob" age={30} isStudent={false} photo={spongebob} />
                        <Student name="Patrick" age={35} isStudent={true} photo={patrick}/>
                        <Student name="Squidward" age={50} isStudent={false} photo={squidward} />
                        <Student name="Robin" age={25} isStudent={false} photo={nicoRobin} />
                        <Student name="Robin" age={25} isStudent={false} photo={nicoRobin} />
                        <Student name="Robin" age={25} isStudent={false} photo={nicoRobin} />
                        <Student name="Robin" age={25} isStudent={false} photo={nicoRobin} />
                        <Student name="Robin" age={25} isStudent={false} photo={nicoRobin} />
                        <Student name="Robin" age={25} isStudent={false} photo={nicoRobin} />
                        <Student name="Robin" age={25} isStudent={false} photo={nicoRobin} />
                    </div>

                    <div className="slider-scrollbar">
                        <div className="scrollbar-track">
                            <div className="scrollbar-thumb"></div>
                        </div>
                    </div>
                    <button id="next-slide" className="slide-button material-symbols-outlined">chevron_right</button>
                </div>
            </div>
        </div>
    );
}

export default Slider;