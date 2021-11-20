import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of Proprietorship Firm Registration
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy and less expensive process"
          text2="The establishment of a sole proprietorship is usually an easy and cheaper procedure. Certainly, the procedure varies relying on the country, state, or province of residence. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="You Are Your Own Boss"
          text2="In a sole proprietorship, the owner has all of the rights to determine what to do and a way to operate. An owner neither needs to report a person nor take orders from anyone else. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Tax Benefits"
          text2="Unlike the shareholders of corporations, the proprietor of a sole proprietorship is taxed only once. The sole proprietor pays only the personal income tax at the income earned by the entity. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Fewer government regulations"
          text2=" Unlike corporations, the entities do not have to spend time and sources on diverse authorities’ necessities consisting of financial records reporting to the overall public."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="You own whole share of profit"
          text2="The owner is only proprietor of the enterprise and consequently he owns the complete percentage of the enterprise income. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Privacy 
          "
          text2="Since sole proprietorships are an unregistered form of entity, there's no database maintained via way of means of the Government with a listing of all proprietorships."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Decision making"
          text2="Control over all commercial enterprise decisions stays in the hands of the proprietor. The proprietor also can absolutely switch the only proprietorship at any time as they deem necessary."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy to Windup a Proprietorship Business"
          text2="As the starting, a proprietorship does now no longer want any particular registration; the winding of the same is likewise very easy."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Sole proprietorships are regularly a stepping stone to incorporation"
          text2="Sole proprietorships are usually used by marketers as a stepping stone to starting an LLC or a corporation."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="There’s no limit to the number of people you could hire"
          text2="There isn't any restriction to the number of people you could appoint as a sole proprietor, and this lets in you to develop your reach and your team."
        />
      </div>
    </div>
  );
}
