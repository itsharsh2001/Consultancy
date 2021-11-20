import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of conversion from Sole Proprietorship to Private Limited Company
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability of Directors"
          text2=" In a private limited company, the personal property of the director’s continue to be untouched if there are any outstanding money owed at the company. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate Legal Existence"
          text2="The private limited company is a separate legal entity, and its existence is break free its individuals.
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy Transferability"
          text2="The possession of the enterprise can be transferred to an individual or to a company by moving the stocks with the consent of shareholders. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Uninterrupted existence"
          text2=" A private limited company is a separate legal entity and for this reason it has a perpetual succession. Unlike a sole proprietorship, it is unaffected by the loss of life or different departure of any member. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Taxation"
          text2="Companies are required to pay Corporation tax on their taxable profits. There is a much wider variety of allowances and tax deductible expenses that may be offset towards company’s profits."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Borrowing capacity
          "
          text2="Banking and financial institutions favor to render large financial help to the corporation and corporation enjoys avenues for borrowings of funds rather than sole proprietorship."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Capital expansion"
          text2="A sole proprietorship is limited to the capital of the owner, while the private limited company has fundraising alternatives and may improve better capital for expansion."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Continuity"
          text2="The private limited company is a separate legal entity and not bound via way of means of the existence of a single owner."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Less Responsibility"
          text2="By conversion of proprietorship right into a company, an individual would have much less responsibility."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="More Reputation"
          text2="A private limited company might definitely have greater recognition when as compared to a sole proprietorship concern. The company would be registered with the Ministry of Corporate Affairs (MCA)"
        />
      </div>
    </div>
  );
}
