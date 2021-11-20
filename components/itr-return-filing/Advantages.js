import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of ITR Return Filing
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Allows lift ahead of losses"
          text2="The enterprise loss or capital losses can be carried ahead up to eight years if the ITR is filed. This loss can additionally be adjusted towards the future earnings that lower taxable earnings in the future. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Define economic worth"
          text2="The ITR filed with the Government defines the economic well worth of the taxpayer. The music of ITR suggests the monetary capability and additionally will increase the capital base of a person. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Loan Processing and excessive chance cover"
          text2="The numbers and the capital base described via the profits tax return is useful for the mortgage processing."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Claim refund of TDS paid from salary"
          text2="Salaried personnel receive the profits after deduction of relevant TDS. It might also appear that after the eligible deductions, the tax legal responsibility is decrease than the quantity of TDS really deducted."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy Loan Approval"
          text2="Filing the ITR will assist individuals, when they have to follow for a car mortgage (2-wheeler or 4-wheeler), House Loan etc."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Claim Tax Refund"
          text2="There can be situations when tax has been deducted (TDS) from your earnings even when your complete taxable profits is much less than the simple exemption restrict and you have nil tax legal responsibility for that year. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Income & Address Proof"
          text2="Income Tax Return can be used as proof of your Income and Address."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Quick Visa Processing"
          text2="Most embassies & consultants require you to furnish copies of your tax returns for the past couple of years at the time of the visa application. "
        />
      </div>

      <div className={classes.container3}></div>
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
      </div>
    </div>
  );
}
