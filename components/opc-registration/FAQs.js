import classes from './FAQs.module.css'
import FAQ from './ui/FAQ.js'

export default function FAQs() {

    const faq1 = <div>
        Once, the enterprise is registered, it needs to fulfill below-mentioned necessities on priority:
 <li>Opening a present day account of the company</li>
<li>Appointing of the statutory auditor</li>
<li>Depositing the paid-up capital cited whilst registration
Issuance and allotment of shares</li>

    </div>

    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <hr />
                <h2 className={classes.containerh2}>FAQ</h2>
                <hr />
            </div>
            <FAQ heading="How lengthy will it take to contain a One Person Company?
        " para="Online Legal India can contain a One Person Company in 7-15 days. The time taken for incorporation will rely on submission of applicable files by means of the patron and pace of Government Approvals. To make certain fast incorporation, please pick out a special title for your Company and make certain you have all the required files prior to beginning the incorporation process." />
            <FAQ heading="What is the minimal quantity of a director to shape OPC?
" para="As the identify suggests, a One Person Company can be started out with one director." />
            <FAQ heading="Is there any new capital requires are in registered in OPC?"
                para="No. The requirement to furnish minimal paid-up capital for OPC registration is now removed. The quantity required for beginning a enterprise need to be subscribed whilst registering OPC. Further, the subscriber ought to preserve at least one share for registration. It is vital to notice that the minimal quantity of INR 1 Lakh have to be stored as Authorized Capital." />
            <FAQ heading="What kind of person can become the member of OPC?" para="Only an person can end up a member of OPC. One wants to be an Indian resident above the age of 18 years to be eligible to shape One Person Company. To refer one as an Indian resident, he/she have to have spent at least 182 days in India in the immediately preceding calendar. An extra situation is that a man or woman can come to be member of solely 1 OPC at any time in the course of or after registration." />
            <FAQ heading="How lengthy is the incorporation of the Company legitimate for?" para="Once a Company is incorporated, it will be energetic and in-existence as lengthy as the annual compliances are met with regularly. In case, annual compliances are now not complied with, the Company will grow to be a Dormant Company and perhaps struck off from the register after duration of time. A struck-off Company can be revived for duration of up to 20 years." />
            <FAQ heading="What is and how we proceed with digital signature?
" para="Digital Signature Certificate is furnished in the shape of a token issued with the aid of Certified Authorities. Any shape that is filed for an on-line OPC registration in India shall be submitted after affixing the DSC of an Applicant. Also, the administrators will require a DSC for DIN utility and the nominee and shareholder shall possess DSC for submitting e-forms for incorporation." />
            <FAQ heading="Can OPC director or owner can connect with one or more company?" para="Yes, an OPC can lift a couple of companies if it is noted in the memorandum of association (MOA) of the organization and authorized by way of the registrar. The business enterprise can point out greater than one enterprise which is associated and from the equal field. Activities which are unrelated such as trend designing and tournament administration or development can't be registered beneath the equal company" />



            <FAQ heading="Convert in to private company? Is it required, if yes when?" para="It is required to convert an OPC into a Private or Public Company when the paid-up capital of the OPC exceeds 50 lakh Rupees, or the Average Annual Turnover in the course of the applicable duration exceeds two Crore Rupees. The obligatory conversion will take impact irrespective of the length of existence of OPC." />
            <FAQ heading="Do I have to be existing in individual to contain a One Person Company?" para="No, you will now not have to be current at our workplace or show up at any workplace for the incorporation of a One Person Company. All the archives can be scanned and dispatched via e-mail to our office. Some archives will additionally have to be couriered to our office." />
            <FAQ heading="Is Foreign Direct Investment allowed for One Person Company?" para="No, FDI is no longer allowed for One Person Company. You can also reflect on consideration on incorporating a Private Limited Company if you wish to deliver FDI." />
            
            <FAQ heading="After registration process is completed, What are the requirement to be fulfilled? " para={faq1} />
            
            <FAQ heading="For one person company, what kind of requirement to be fulfilled for annual compliance?" para="During each and every monetary year, the enterprise should preserve board conferences in case of extra than 1 director. Furthermore, the money owed and monetary statements should be audited via an impartial auditor. Subsequently, it shall file structure AOC – four and MGT – 7 as a phase of Annual Compliance inside the given time." />
        </div>
    )
}
