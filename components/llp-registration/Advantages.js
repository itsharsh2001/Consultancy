import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of Becoming LLP 
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited liability of the partners"
          text2="The partners of the LLP have limited liability. This implies that they are obligated to pay just the measure of commitments made by them and are not actually at risk for any misfortune in the business. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate legal entity"
          text2="Registration of LLP creates a separate legal identity than its partners just like companies. It is a significant benefit that isn't accessible to a regular partnership firm.
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Low cost and less compliance "
          text2="The expense of framing a LLP is low contrasted with the expense of incorporating a public or private limited company. The compliances to be trailed by the LLP is likewise low. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Raising Capital / Money"
          text2="A LLP being a directed regulated entity like an organization can draw in finance from PE Investors, monetary foundations, and so forth."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Taxation Relief"
          text2="LLP isn't needed to pay the additional charge on income tax. Besides, it is likewise not needed to pay charge on benefits given to partners like profits distributed though Company is needed to pay dividend tax distributed to its shareholders."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No requirement of minimum capital contribution
          "
          text2="The LLP can be formed with no minimum capital. There is no prerequisite of having a minimum paid up capital prior to going for incorporation. It very well may be formed with any amount of capital contributed by its partners."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Distinct Legal Recognition"
          text2="LLPs are treated as separate legal entities so the partners and LLP are distinct from each other in the eyes of the law."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Perpetual Succession"
          text2="An incorporated LLP has perpetual succession. Notwithstanding any changes in the partners of the LLP, the LLP will be the same entity with the same privileges, immunities, estates, and possessions."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
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
      </div>
    </div>
  );
}
