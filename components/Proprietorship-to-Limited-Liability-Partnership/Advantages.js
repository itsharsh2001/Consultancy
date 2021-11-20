import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of conversion from proprietorship to LLP
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate Legal Existence"
          text2="Limited liability partnership is a separate legal entity, and its existence is separate from its partners, unlike the general partnership firm. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability of Owners "
          text2="The liability of Partners is limited to the amount of capital contribution agreed by the partners in the LLP Agreement made by them. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Flexibility to Operate "
          text2="The LLP is controlled and run consistent with the LLP agreement. It’s the partners that determine how the LLP would function and divide the obligations and responsibilities. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Lower Compliance Requirement"
          text2="Compared to a Private Company, there's a lower compliance requirement in case of LLP, inclusive of the audit requirement. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Stamp Duty"
          text2="No instrument of transfer is needed to be accomplished and therefore no stamp duty is needed to be paid."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Capital Gains Tax
          "
          text2="No capital gains tax will be charged on transfer of assets from the organization to the LLP."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Carry Forward/Set Off"
          text2="The accumulated loss and unabsorbed depreciation of corporation is deemed to be loss/depreciation of the successor LLP for the previous year wherein conversion was effected."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Automatic Transfer"
          text2="All the belongings and liabilities of the corporation immediately before the conversion become the belongings and liabilities of the LLP."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Audit is needed"
          text2="In case of LLP no obligatory Audit is needed. The audit is needed best while the turnover of the business enterprise exceeds Rs 40 lakhs and in which the contribution exceeds Rs 25 lakhs."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Multiple Relationships"
          text2=" An individual may be a partner, worker or creditor of a Limited Liability Partnership."
        />
      </div>
    </div>
  );
}
