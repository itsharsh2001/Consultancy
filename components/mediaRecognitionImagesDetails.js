import classes from './mediaRecognitionImagesDetails.module.css'
import {gsap} from 'gsap';
import {useRef, useEffect} from 'react'

export default function MediaImagesComponent(props) {
    const boxRef = useRef()
    useEffect(() => {
        gsap.from(boxRef.current, { opacity: "0" })
        gsap.to(boxRef.current, { opacity: "1" })
        // gsap.to(boxRef.current, { rotation: "+=360" });
      });
    return (
        <div className={classes.imagebox} >
            <img ref={boxRef} src={props.image} className={classes.image} alt="" />
        </div>
    )
}
