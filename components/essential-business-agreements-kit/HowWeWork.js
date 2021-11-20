import classes from './HowWeWork.module.css'
import Count from './ui/count_HowWeWork.js'

export default function HowWeWork() {
    return (
        <div>

            <div className={classes.text}>
                <hr className={classes.texthr}/>
                <h2 className={classes.texth2}>
                How we work?
                </h2>
                <hr className={classes.texthr}/>

            </div>

            <div className={classes.flex}>
            <div className={classes.count}>
            <div className={classes.container}>

            </div>
            <div className={classes.number}>
            <div  className={classes.number1} >

            <Count number={1}/>
                                
            </div>
            <Count number={2}/>
            <Count number={3}/>
            <Count number={4}/>
            <Count number={5}/>
            <Count number={6}/>
            <Count number={7}/>
            </div>
            </div>
            <div className={classes.steps}>
            <p className={classes.step1}>Fill our Registration Form & Make the Payment</p>
            <p className={classes.step2}>Expert Will Call You & Receive All the Necessary Documents</p>
            <p className={classes.step3}>Our Expert will start Drafting the Requirements</p>
            <p className={classes.step4}>Will Create DSC & the DIN Number of Director</p>
            <p className={classes.step5}>MOA and AOA Drafting and Submit</p>
            <p className={classes.step6}>Your Documents will be Filed & submitted to the ROC</p>
            <p className={classes.step7}>Congratulations! You've registerd your company. Certificates will be sent by post.</p>
            </div>
        </div>
        </div>
    )
}
