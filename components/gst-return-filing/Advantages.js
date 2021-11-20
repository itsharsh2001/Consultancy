import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of GST Return Filing
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Seamless go with the flow of ITCC"
          text2="The tax already paid via the provider is deducted from the legal responsibility to pay taxes."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Simple and frequent structure for all taxes"
          text2="Under the GST regime, three unique kinds of taxes are accrued – IGST, CGST & SGST. The data about all three taxes paid or accrued is required to be recorded in a single shape itself."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Score greater compliance rating"
          text2="To display the compliance structure, the GST Network has brought the mechanism of compliance rating."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Avoid penalty and interest"
          text2="For lengthen in submitting return, the taxpayer is charged with a late price of ₹ 50 for every day of a lengthen until the proper date of filing."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Abolition of the cascading effect"
          text2="GST submitting simplifies the whole tax technique by using disposing of all the tax-on-tax or the cascading method."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="An organized tax system"
          text2="The enterprise identities are allowed right here to pay the whole tax quantity at a single time. GST return submitting has changed the chaotic older tax system."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Business opportunities"
          text2="By the collaboration of the Indian tax system, the commercial enterprise entities are now taking part in a nationwide market except paying extraordinary taxes to the State Governments. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Helping the start-ups"
          text2="The previous VAT used to be obligatory for any corporation with an annual turnover of INR 5 lakhs.  Which acted as tough for any start-up entity? GST return submitting has changed the VAT, benefiting the start-ups with all sense."
        />
      </div>

      {/* <div className={classes.container3}></div> */}
      {/* <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy Transferable Ownership"
          text2="It is easier to subscribe or leave the membership of the company. Also It is easier to transfer the ownership."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Mandatory Audit Requirement"
          text2="In LLP, only in the case of business, where the annual turnover/contribution exceeds Rs 40 Lacs/Rs 25 Lacs are required to get their account audited annually by a chartered accountant."
        />
      </div> */}
    </div>
  );
}
