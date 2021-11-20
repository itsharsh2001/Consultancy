import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages Conversion of OPC to a Private Limited Company
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easier to Raise Funds"
          text2=" Raising funds as a private limited company is a relatively easy undertaking because it offers an possibility for elevating stocks and has many approaches to elevate price range in the form of private equity, ESOP, and more."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability of Owners"
          text2="The duty or money owed of the corporation does not create a charge over the owner’s personal assets. Their liability is confined only to the subscribed capital unpaid by them. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Taxation Benefits"
          text2=" Private companies were placed under the tax bracket of 30% on overall income. Thus, from the angle of taxation, the idea of One Person Company will become a much less profitable idea because it imposes a heavy financial load. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate Legal Existence "
          text2="A Private Limited Company is registered; a legal entity is born in eyes of law, that's become independent from its proprietors and managers."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Long and continuity of Existence"
          text2="The other benefit of Conversion of OPC to a Private Limited Company is that it’s long and continuity of existence."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy Transfer of ownership
          "
          text2="In a Private Limited company the ownership can be easy transferable but in one Person Company such transfer is difficult to take place."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Beneficial to both Small scale and Large-scale businesses"
          text2="Private Limited Company is beneficial to both small scale as well as large scale businesses."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="International Expansion"
          text2="Private limited companies are allowed Foreign Direct Investment of as much as 100%. Thus incorporating a Private Limited Company may be fruitful."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="COMPLETE CONTROL OF THE COMPANY WITH THE SINGLE OWNER"
          text2="This leads to fast decision making and execution. Yet he/she can appoint as many as 15 directors in the OPC for administrative functions, without giving any share to them."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="PERPETUAL SUCCESSION:"
          text2="An OPC being an incorporated entity will also have the feature of perpetual succession and will make it easier for entrepreneurs to raise capital for business. The OPC is an artificial entity distinct from its owner"
        />
      </div>
    </div>
  );
}
