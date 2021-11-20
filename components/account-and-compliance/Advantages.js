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
          text2="A company registered in India has a legal entity in eyes of 
          law. It is different from its owners and managers. It has its own 
          entity. The organization can work on its own name by opening a 
          bank account to possess resources and go into contract with parties. 
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
          text2="Management and decision making process becomes more difficult in 
          public companies because of no. of shareholders are more. But in a 
          private limited company this complexity got eliminated as no. of 
          shareholder is less."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Fund Raising"
          text2="Pvt. Ltd. Company registration measure is severe enough to make 
          this design trustworthy and makes raising money or 
          acquiring simpler. The actual association gives 
          various approaches to bring assets up in the type of private value, 
          ESOP"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Minimum Share Capital
          "
          text2="You will need truckload of cash for public organization. Public 
          organization needs a base offer capital of Rs. 5,00,000. For a privately 
          owned business, the earlier least offer capital was Rs. 
          1,00,000, however presently there is no such barrier. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Perpetual Succession"
          text2="The company shall continue to exist till it's wound up in accordance with the provisions of the relevant law."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Better Governed"
          text2="Companies are governed by the companies Act, 2013 and have to follow various other regulatory procedures during the course of its governance."
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
          text1="Seperate Property"
          text2="A company has a legal entity is capable of owning its funds and other properties. The property of company is not the property of its shareholders."
        />
      </div>
    </div>
  );
}
