import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of Becoming OPC (One Person Company)
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="COMPLIANCE BURDEN "
          text2="A Single Person Company is benefited with an exemption to several compliances unlike a personal company. Compliances like holding General and committee meeting, etc. aren't applicable to OPC. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="LIMITED LIABILITIES OF OWNER OR FOR OPC:"
          text2="“Thus OPC allows an individual to take risks without risking his/her personal assets”. The most giant purpose for shareholders to include the ‘single-person company’ is simply the wish for the restrained liability.
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="TAX FLEXIBILITY AND SAVINGS"
          text2="OPC make a legitimate contract with its shareholder or directors. This capacity as a director you can get hold of remuneration, as a lesser you can get hold of rent, as a creditor you can strengthen money to your very own organization and earn interest. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="SEPARATE PROPERTY"
          text2="An OPC will have its very own separate property as it features its very own identification and features as a separate legal entity. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="FULL CONTROL OVER THE COMPANY"
          text2="The reality helps in quickly selection making and execution. Yet OPC can pick as many as 15 administrators for professional functions, except imparting any share to them."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Transferability of Shares
          "
          text2="OPC has only one shareholder. The trouble of transferring a part of the share does not stand up at all due to the fact if it is done; the organization will end to be a “one person” organization."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Legal Status and Social Recognition For Your Business"
          text2="One person company is the most famous enterprise structure in the world. Large organizations favor to deal with private limited companies in preference to proprietorship firms."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Complete Control Of The Company With The Single Owner"
          text2="OPC is absolutely managed and controlled by the Single Owner. It results in quick decision making and execution. The sense of belonging motivates to develop the commercial enterprise further."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate Property"
          text2="An OPC will have its personal separate belongings because it profits its personal identity and features as a separate legal entity."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Credit Rating"
          text2="OPC with a bad credit score can still apply for the loan. The credit score of One Person Company is not material if the score of OPC is according to the norms."
        />
      </div>
    </div>
  );
}
