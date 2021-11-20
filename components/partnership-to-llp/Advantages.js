import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of partnership to LLP conversion
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate legal entity "
          text2="The partnership isn't always a separate legal entity. Limited liability partnership is a separate legal entity."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability of Owners"
          text2="The liability of Partners is limited to an extent of capital contribution as agreed through the companions with inside the LLP Agreement. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Convenient"
          text2="It is simple to begin and control a enterprise like entrepreneurs. LLP agreements are custom designed in step with meet the needs of partners concerned."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Tax benefits"
          text2="Another benefit is that LLP saves the Dividend Distribution Tax, Minimum Alternative Tax, and Income Tax because interest and remuneration are paid to companions as a revenue that is payable to directors."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Raising Capital"
          text2="Raising Capital is simpler in the LLP structure because it permits a limited partner to take part without taking up any accountability, not like the general partnership wherein all common companions have unrestrained liability."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No minimal capital requirement
          "
          text2="LLP may be commenced with the minimal quantity of capital money. Capital can be in the shape of tangible, movable asset like Land, machinery or intangible shape."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No restrict on proprietors of business"
          text2="LLP may also have companions varying from 2 to many. There is no restriction for companions in LLP. An LLP requires a minimum 2 companions at the same time as there may be no restrict at the most number of companions."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Lower Registration Cost "
          text2="The cost of registration of LLP is low compared to some other company (Public or Private) in Comparison of LLP, OPC, private limited, partnership, and proprietorship."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No requirement of obligatory Audit "
          text2="LLPs aren't required to audit the accounts. Any different company (Public, Private) are mandated to get their accounts audited by the auditing firm. LLP is required to audit their account in some situation."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Savings from lower compliance burden "
          text2="LLP must face much less compliance burden as they must submit only statements i.e. the Annual Return & Statement of Accounts and Solvency."
        />
      </div>
    </div>
  );
}
