import classes from "./ServicePackages.module.css"
import Packages from "./ui/packages.js"
import MobileServicePackage from './ui/MobileServicePackages.js'

export default function ServicePackages(props) {
    return (
        <div id="servicePackage">
            <div  className={classes.webPackages}>
            <h2 className={classes.text}>Select Packages(Excluding DSC and Govt Fees)</h2>
            <Packages planName="Basic Plan" planPrice={props.basicPlan} one="Register your Private Limited Company at Ministery of Corporate Affairs" two="Drafting & Filing by CA/CS" three="Expert advice by CA/CS" four="MCA processing and CIN" five="Company PAN & TAN" six="MOA" seven="AOA" eight="Allotment of 2 DINs" nine="ESI and PF registration" ten="GST registration" eleven="INC 20A commencement of business" twelve="The 1st Board Resolution documentation" thirteen="Consent Letter drafting" fourteen="Appointment of the Auditor"/>

            <Packages planName="Smart Plan" planPrice={props.smartPlan} one="Register your Private Limited Company at Ministery of Corporate Affairs" two="Drafting & Filing by CA/CS" three="Expert advice by CA/CS" four="MCA processing and CIN" five="Company PAN & TAN" six="MOA" seven="AOA" eight="Allotment of 2 DINs" nine="ESI and PF registration" ten="GST registration" eleven="INC 20A commencement of business" twelve="The 1st Board Resolution documentation" thirteen="Consent Letter drafting" fourteen="Appointment of the Auditor"/>

            <Packages planName="Mega Plan" planPrice={props.megaPlan}one="Register your Private Limited Company at Ministery of Corporate Affairs" two="Drafting & Filing by CA/CS" three="Expert advice by CA/CS" four="MCA processing and CIN" five="Company PAN & TAN" six="MOA" seven="AOA" eight="Allotment of 2 DINs" nine="ESI and PF registration" ten="GST registration" eleven="INC 20A commencement of business" twelve="The 1st Board Resolution documentation" thirteen="Consent Letter drafting" fourteen="Appointment of the Auditor"/>
            </div>

            <div >
                
            <h2 className={classes.text}>Select Packages(Excluding DSC and Govt Fees)</h2>
            <div className={classes.MobilePackages}>


            <MobileServicePackage planName="Basic Plan" planPrice={props.basicPlan} one="Register your Private Limited Company at Ministery of Corporate Affairs" two="Drafting & Filing by CA/CS" three="Expert advice by CA/CS" four="MCA processing and CIN" five="Company PAN & TAN" six="MOA" seven="AOA" eight="Allotment of 2 DINs" nine="ESI and PF registration" ten="GST registration" eleven="INC 20A commencement of business" twelve="The 1st Board Resolution documentation" thirteen="Consent Letter drafting" fourteen="Appointment of the Auditor"/>

            <MobileServicePackage planName="Smart Plan" planPrice={props.smartPlan} one="Register your Private Limited Company at Ministery of Corporate Affairs" two="Drafting & Filing by CA/CS" three="Expert advice by CA/CS" four="MCA processing and CIN" five="Company PAN & TAN" six="MOA" seven="AOA" eight="Allotment of 2 DINs" nine="ESI and PF registration" ten="GST registration" eleven="INC 20A commencement of business" twelve="The 1st Board Resolution documentation" thirteen="Consent Letter drafting" fourteen="Appointment of the Auditor"/>

            <div className={classes.mp3} >
            <MobileServicePackage planName="Mega Plan" planPrice={props.megaPlan} one="Register your Private Limited Company at Ministery of Corporate Affairs" two="Drafting & Filing by CA/CS" three="Expert advice by CA/CS" four="MCA processing and CIN" five="Company PAN & TAN" six="MOA" seven="AOA" eight="Allotment of 2 DINs" nine="ESI and PF registration" ten="GST registration" eleven="INC 20A commencement of business" twelve="The 1st Board Resolution documentation" thirteen="Consent Letter drafting" fourteen="Appointment of the Auditor"/>
            </div>

            </div>
            </div>
        </div>
    )
}
