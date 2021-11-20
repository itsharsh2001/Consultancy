import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of converting Pvt. Ltd Company to LLP
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Less Statutory Compliance"
          text2="The compliances to be fulfilled are much less in comparison to a Private Limited Company. An LLP isn't required to hold statutory records & registers. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Independent liability "
          text2="Individual companions are protected against the load of joint liability created via way of means of any other accomplice’s wrongful business decisions or misconduct.
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Operational Flexibility"
          text2="The companions are directly related to the everyday operations and control of LLP. Unlike a company, LLP is ruled via the LLP Agreement that's accomplished jointly with the aid of using the companions."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Rewards and returns to companions "
          text2="The companions of the LLP get more than one returns, which includes remuneration, the percentage of profit and additionally the interest on capital. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Capital Gains Tax"
          text2="No capital gains tax shall be charged on transfer of property from the organization to the LLP."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Convenient
          "
          text2="It is easy to begin and manipulate a enterprise like entrepreneurs. LLP agreements are custom designed in in step with meet the desires of companions concerned"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No minimal capital requirement"
          text2=" LLP can be started with the minimal quantity of capital money. Capital can be in the form of tangible, movable asset like Land, machinery or intangible shape."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Lower Registration Cost "
          text2="The price of registration of LLP is low compared to every other company (Public or Private)."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No limit on owners of business"
          text2="There is no limit for partners in LLP. An LLP requires a minimum 2 partners while there is no limit on the maximum number of partners in contrast to a private company wherein there is a restriction of not having more than 200 members."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Savings from lower compliance burden"
          text2="LLP have to face less compliance burden as they have to submit only two statements i.e. the Annual Return & Statement of Accounts and Solvency. "
        />
      </div>
    </div>
  );
}
