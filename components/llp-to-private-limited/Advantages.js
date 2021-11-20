import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of converting LLP into limited company
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy Fund raising"
          text2="Stringent registration method makes this structure more credible amongst other which makes fundraising or borrowing from outside sources easier. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate Legal Existence"
          text2=" The separate possession and control assist both – the enterprise and the control to focus on their potential works. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Preservation of Brand Value"
          text2="By converting LLP into limited company the brand value of the company can be preserved."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="ESOPs to personnel "
          text2="Only private limited companies can provide inventory ownership and ESOP plans. It draws employees because it creates an incentive for them to work in the company and gain with its growth and prosperity."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Capital Gain"
          text2="The Gujarat High Court (HC) had held in the taxpayer’s case that conversion of a firm into a company was not a transfer (even before section 47(xiii) changed into introduced) and could not be concern to capital gains tax."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability of Owners 
          "
          text2="The duty or money owed of the enterprise does not create a charge over the owner’s private assets. Their liability is limited only to the capital subscribed and unpaid through them."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Retained profits"
          text2="Limited companies can choose to retain profits within the business, rather than paying money out via salaries or dividends."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Dividends"
          text2="Unlike LLP members, who need to pay the full price of income tax on their earnings, company owners (shareholders) can select to pay themselves via dividends."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Expansion"
          text2="Takeovers and acquisitions are normally less complicated and greater straightforward for constrained organizations in comparison to LLPs."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Flexibility"
          text2="Although this isn't always a cause to transform from LLP to a limited company, it should be referred to that limited companies may be simply as flexible as LLPs in terms of possession structure."
        />
      </div>
    </div>
  );
}
