import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of registering a Farmer-Producer Organization
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate legal identity "
          text2="Alike every other company, the producer company also has a separate legal identity. The assets, liabilities, rights, money owed and privileges shall vest with inside the company. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited Liability of owners"
          text2="The participants and the producer institutions have limited liability toward the debts and responsibilities of the company. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Benefits to members"
          text2="Every member can initially acquire only the value of the produce as decided by the Board. The withheld rate can be distributed later in cash or through allotment of equity shares. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Special User Rights "
          text2="The active members of the producer company may also experience unique user rights, if provided with inside the AOA of the organization. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="More Credibility"
          text2="A producer company gives extra credibility to the farmers compared to different unregistered companies of farmers or agriculturists."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Ease in control and registration 
          "
          text2="Registration as a producer company is an easy manner and the company could make adjustments in the Board of Management through submitting a few simple forms with the concerned ROC."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Acceptance of Deposits "
          text2="A registered company can receive deposits in the shape of fixed or recurring deposits. Other than that they can also disburse the mortgage to the members and farmers at a totally affordable fee of interest."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="More Liberal"
          text2="Producer Companies are registered under Companies Act 2013 that is a central law and is relatively more liberal with minimum authorities manipulate in the control of the Company compared to Co-operatives Societies."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Minimum Member Requirement"
          text2="There isn't any restriction for optimum number of members and the number of individuals may be expanded as in step with feasibility and need."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Flexibility to Expand Business"
          text2="The location of operation for a Producer Company is the whole country giving flexibility to extend commercial enterprise in a free and expert manner."
        />
      </div>
    </div>
  );
}
