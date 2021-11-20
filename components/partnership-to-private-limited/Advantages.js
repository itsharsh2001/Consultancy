import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of conversion from partnership to a private limited company
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability of Owners"
          text2="The liability of participants/administrators is limited to an extent of capital contribution agreed by the participants of the enterprise. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate legal entity"
          text2="A partnership isn't always a separate legal entity. The private limited company is a separate legal entity therefore it additionally provides the capability to sue third parties.
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separation of Management and Ownership"
          text2=" The separate ownership and control assist each to cognizance on their capability of works."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Raising Capital"
          text2="Raising Capital is less difficult in the Pvt. Ltd. Company because it permits the individuals to take part without taking up any personal accountability. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="More Transparency"
          text2="The formation of a Private Limited company is extra transparent than different enterprise structures."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Ownership transfer
          "
          text2="The ownership gets transferred if the shareholders offer their consent. However, in the case of a Partnership Firm, the accomplice can't transfer its share without regarding the Partnership deed."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="More Flexible"
          text2="Changes and alterations associated with shareholding and control may be done without interrupting the commercial enterprise policies."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Capital gain tax "
          text2="No Capital gain tax will be charged at the transfer of property from corporation to company."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Stamp Duty "
          text2="All movable and immovable properties of the organization automatically vest in the Company. No instrument of transfer is needed to be done and consequently no stamp duty is needed to be paid."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Shareholders’ Limited Liability"
          text2="
          Shareholders’ Limited Liability
          In a Public Limited Company, the accountability of the Shareholders and Directors is limited according to the amount of the shares they own in the organization."
        />
      </div>
    </div>
  );
}
