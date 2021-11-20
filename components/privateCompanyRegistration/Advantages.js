import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of Becoming Privated Company Limited
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability"
          text2="The organization's commitment or obligations of doesn't make a 
          charge over the proprietor's owned assets. Their liability stays limited
          uniquely to the capital bought in and unpaid by them."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate Legal Entity"
          text2="When a company registered in India it has a legal entity in the eyes of law. It becomes different from its owners and managers. It has its own entity. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Beneficial in Startup India Registration"
          text2="Under the scheme of Startup India a company can take advantage a lot 
          of benefits like fund raising, tax benefits, easier compliance trademark 
          registration subsidies etc."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Management and Decision Making"
          text2="In a private limited company the complexity of management and decision making got eliminated as no. of shareholder is less."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Fund Raising"
          text2="Pvt. Ltd. Company registration measure is sufficiently severe to make this design trustworthy among others which make raising money or acquiring from outer sources simpler. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Minimum Share Capital
          "
          text2="For a privately owned business, the previous least number of the offer capital was Rs. 1, 00,000, however presently there is no such least impulse. Thus, there is no pressing factor of asset necessities. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="FDI Allowed"
          text2="In Private Limited Company, 100% Foreign Direct Investment is permitted which means any foreign entity or foreign person can without delay spends money on a Private Limited Company."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Builds Credibility "
          text2="The details of the organization are available on a public database. This improves the credibility of the organisation because it makes it easy to authenticate the details"
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Uninterrupted existence"
          text2="A company, being a separate legal person, is unaffected by the loss of life or different departure of any member however is still in existence no matter the changes in membership."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Free & Easy transfer of shares"
          text2="Shares of a company limited by shares are transferable by a shareholder at any other person."
        />
      </div>
    </div>
  );
}
