import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of section-8-company-registration
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate legal identity"
          text2="Being registered as a company, it obtains a separate identification other than its members. Therefore, it is able to own and maintain the assets and liabilities in its personal name no matter the reference to the members. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Tax and compliance exemptions "
          text2="With its registration under Section 8 of Companies Act, it obtains a unique status – different from other entities.. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No company title"
          text2="Although the company enjoys the advantage of the company entity, it isn't always labeled because the corporate entity. The company does not want to feature the suffix “Private Limited” or “Limited” after its name"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability "
          text2="A corporation registered under Section eight ensures limited liability to its members. The liability of the participants is limited only to the amount of the capital subscribed and unpaid. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Credible"
          text2="A Section Eight Company has greater credibility compared to some other Non-profit enterprise shape be it a Trust or Society."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No stamp duty payable
          "
          text2="A section 8 Company is exempted for the fee of stamp duty relevant for registration as relevant in case of other systems which includes private limited or a public limited company."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No minimal capital requirement "
          text2="There is no prescribed restrict over section 8 companies for the minimal capital requirement not like different entities including public limited"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="The ease at transferring ownership/identify"
          text2="The limited liability companies don’t have the benefits to transfer their identify or possession."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Zero Stamp Duty"
          text2="A Section 8 company do not have to pay stamp duty on the AoA and MoA of the private or public limited company which other companies surely pays.  "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Minimal share capital"
          text2="Unlike the other limited companies like public, private, or one person, a Section 8 company do not need much share capital to set up the entity. The members can directly use the funds from their subscriptions or donations.  "
        />
      </div>
    </div>
  );
}
