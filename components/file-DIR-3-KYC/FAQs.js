import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    const faq1 = <div>
       Every man or woman who has been distributed DIN and has ‘approved’ popularity should file this structure if he is:
        <li>A director in the company; or</li>
        <li>A companion in LLP; or </li>
        <li>conserving DIN however no longer related with any organization.</li>
    </div>

    const faq2 = <div>
        Due dates of LLP compliance are primarily based on the closure of every monetary year. Financial Year of each LLP ought to be closed on thirty first March. However, duration of economic yr relies upon on the month of its incorporation:
        <br />
        a) LLPs registered between 1st April and thirtieth September: The LLP need to shut its monetary yr on thirty first March of subsequent calendar year. Suppose LLP is registered on 1st May, 2018 , the identical ought to shut its economic 12 months on thirty first March, 2019.
        <br />
        b) LLPs registered between 1st October and thirty first March: The LLP has an choice to pick the cease of its monetary year. For occasion if the LLP is registered on thirtieth October, 2018 the identical can shut its economic 12 months both on thirty first March, 2019 or thirty first March, 2020.
    </div>
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="Who is required to file e-form DIR-3 KYC?" para={faq1}/>
            <FAQ heading="Is it obligatory to have DSC for submitting DIR-3 KYC?" para="Yes, each and every DIN holder ought to possess legitimate PAN-based Class – two DSC. The e-form is filed with individual’s very own DSC, small print of which are established without delay with the Income Tax Department as per PAN. In case of overseas national, the title would be matched with his/her title entered whilst submitting DIR-3 KYC."/>
            <FAQ heading="Is expert certification mandatory?" para="Yes, professional certification for submitting DIR-3 KYC is mandatory. The e-form ought to be licensed by using the practising expert i.e. CA/CS/CMA with his DSC."/>
            <FAQ heading="My DIN reputation is ‘Deactivated’. Can I file KYC form?" para="No, an Individual with ‘Approved’ fame can solely file this form. However, if your DIN is deactivated via motive of non-filing of DIR-3 KYC, you can file this shape for re-activating DIN with the aid of charge of the prescribed charge (INR 5,000)."/>

            <FAQ heading="I am a non-resident Indian. Can I furnish Indian wide variety cellular number?" para="No. A non-resident have to grant a overseas cell wide variety and overseas tackle as their everlasting address."/>
            <FAQ heading="What is the Government rate for submitting e-form DIR-3 KYC?" para="For submitting the stated form, there is no authorities charge prescribed. However, if it is filed after the due date, a penalty of INR 5,000 is imposed."/>
            <FAQ heading="What takes place if my DIN receives deactivated due to non-filing of KYC?" para="In stated case, the DIN will be deactivated with the motive of ‘non-filing of DIR-3 KYC’. Due to deactivation, you will no longer be allowed to take any moves primarily based on your DIN and any motion taken will be held invalid."/>
            <FAQ heading="Is this a one-time method or to be performed annually?" para="Filing KYC through administrators are prescribed annually. For each monetary year, the KYC is to be up to date with the aid of thirtieth April of the instant subsequent monetary year."/>
            
        </div>
    )
}
