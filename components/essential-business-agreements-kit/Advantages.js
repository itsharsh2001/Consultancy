import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of E-Way Bill
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Complications"
          text2="It eliminates the complication of the tax process"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Quicker"
          text2="Being a digital procedure, it is quicker and easier"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Coverage"
          text2="By registering right here the commercial enterprise personnel accumulate a same record for nation-wide usage member."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Protection"
          text2="GST E-Billing tracks the motion of each cargo bettering the protection of the goods member"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Quick & Efficient"
          text2="It ensures a preset timing for cargo making sure a quicker transportation"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Less Documentation"
          text2="The on-line way invoice era ensures that the documentation is reduced. Instead of kingdom sensible documents, solely one invoice is generated for inter-state/intrastate movement."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Faster and Efficient Transportation"
          text2="The transportation will be environment friendly in the shape of price and the time as well. The transporters do now not require skipping from verification at each and every take a look at post."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Quick Processing"
          text2="Most embassies & consultants require a lot of time from you at the time of application. "
        />
      </div>

      {/* <div className={classes.container3}></div>
        <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Carry Forward Your Losses"
          text2="If you file the return inside the original due date, you will be in a position to raise forward losses to subsequent years, which can be used to set off towards the profits of subsequent years."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Avoid Penalty"
          text2="If you are required to file your tax returns in accordance to the earnings tax act, however didn’t, then the tax officer deserves the proper to impose a penalty of up to Rs.5, 000."
        />
      </div> */}
    </div>
  );
}
