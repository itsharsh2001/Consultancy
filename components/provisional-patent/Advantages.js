import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of Registering An Indian Subsidiary
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="COMPLIANCE BURDEN "
          text2="The One person Company includes within the definition of “Private Limited Company” given under section 2(68) of the businesses Act, 2013. Thus, an OPC will be required to comply with provisions applicable to non-public companies. However, OPCs have been furnished with a wide variety of exemptions and consequently have lesser compliance associated burden. A Single Person Company is benefited with an exemption to several compliances unlike a personal company. Compliances like holding General and committee meeting, etc. aren't applicable to OPC. However, committee meeting must be held if quite one director is on Board."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="LIMITED LIABILITIES OF OWNER OR FOR OPC:"
          text2="Thus OPC allows an individual to take risks without risking his/her personal assets”. The most giant purpose for shareholders to include the ‘single-person company’ is simply the wish for the restrained liability. One of the another advantages of registering OPC lies in the separate prison entity of the enterprise the place the legal responsibility and duties are now not charged over the non-public property of the sole member. The legal responsibility of a member is confined to the unpaid quantity of the capital subscribed by means of the member. Even in the case of liquidation, the non-public belongings of the member are protected, without in positive unique cases..
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="TAX FLEXIBILITY AND SAVINGS"
          text2="OPC make a legitimate contract with its shareholder or directors. This capacity as a director you can get hold of remuneration, as a lessor you can get hold of rent, as a creditor you can strengthen money to your very own organization and earn interest. Directors’ remuneration, hire and hobby are a deductible rate which decrease the profitability of the Company and subsequently brings down taxable profits of your business."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="SEPARATE PROPERTY"
          text2="An OPC will have its very own separate property as it features its very own identification and features as a separate legal entity. The OPC will grow to be the proprietor of its assets, and the individuals will no longer have any insurable rights in the property of the company. A One Person Company would acquire the fame of a separate legal entity. Such OPC registration ensures that the entity is separate from the owner, not like a proprietorship firm. OPC can very own the property in its very own identify and enter into a contract with the parties. The moves of the corporation are unbiased of the owner. This is often the most advantage of OPC registration.Financing a private venture like a sole sole proprietorship or partnership can be troublesome on occasion. A LLP being a directed regulated entity like an organization can draw in finance from PE Investors, monetary foundations, and so forth."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="FULL CONTROL OVER THE COMPANY"
          text2="The reality helps in quickly selection making and execution. Yet OPC can pick as many as 15 administrators for professional functions, except imparting any share to them."
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
