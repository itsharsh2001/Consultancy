import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of OPC over sole proprietorship
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate Legal Entity consequently limited liability "
          text2="Protection of the company’s private property assures that the proprietor has limited liability to the extent of his/her very own share."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Opens higher commercial enterprise avenue's "
          text2="OPC is registered much like a private business enterprise and private companies are the depended on form of business which makes it smooth for them to get investment from the financial institutions. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Simple to Get Loan from Banks"
          text2="Banking and financial institutions favor to lend money to the company rather than proprietary firms. So it is good to register your startup as a One Person company instead of proprietary organization."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="An easy to control structure "
          text2="The structure of OPC is controllable as there's only one member. There is no need to keep an annual or added regular general meeting."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Organized Structure "
          text2="The OPC gives the business enterprise a structure just like a private limited company and for this reason make it organized with the advantage of limited liability. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Board Meeting 
          "
          text2="A One Person Company is needed to conduct only one assembly of the Board of Directors in every 1/2 of of a calendar year and the gap among the 2 conferences shall not be much less than 90 days."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Benefits under Income Tax Law "
          text2="Any remuneration paid to the director could be allowed as deduction as per income tax law, in contrast to proprietorship."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Increased Trust and prestige"
          text2="Any enterprise entity that runs in the form of the organization constantly enjoys an increased believe and prestige."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Credit rating"
          text2="The OPC with awful credit score may even get the loan. The credit score of OPC will not be material if the rating of OPC is as in keeping with norms."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Minimum Requirements"
          text2="OPC ought to face little compliance burden compared to private limited companies, therefore OPC can more focus on different purposeful and center areas."
        />
      </div>
    </div>
  );
}
