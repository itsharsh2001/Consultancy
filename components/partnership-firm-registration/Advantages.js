import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of Partnership Firm 
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Shared Responsibilities"
          text2="The phrase Partnership itself describes people coming collectively for a common commercial enterprise object. The partners share the responsibility to work and control the business collectively."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Quick Decision"
          text2="The decision-making procedure in a partnership firm is brief as there's no difference among ownership and management. All the decisions are taken by the partners together, and that they may be applied immediately.
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Operating Flexibility"
          text2="A Partnership firm is operated on the basis of the Partnership deed accomplished by the partners, mutually. The partners can decide a way to function the business with their mutual consent."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Pre-defined Object or Period"
          text2="At the time of registering a Partnership firm, the deed enumerates the pre-described enterprise targets and activities that is the principle purpose to begin enterprise."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Less Compliance"
          text2="The partnership firm has to stick to only a few compliances in comparison to a company or LLP."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Various Financial Returns to the Partners
          "
          text2="Partners involved with the corporation get various kinds of returns for his/her capital in addition to their individual efforts.The operating partner additionally gets remuneration similarly to the interest on capital and proportion of profit."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy access to profits"
          text2=" In an enterprise partnership, the earnings of the enterprise are shared among the partners. They flow without delay through to the partners’ personal tax returns rather than to start with being retained in the partnership."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="More companions, greater capital"
          text2="The more companions there are, the extra money there can be available from their mixed resources to make investments into the business that can assist to fuel growth."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Privacy"
          text2="Compared to a limited company, the affairs of a partnership business may be saved private by the partners."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Better decision-making"
          text2="Compared with working on your own, in a partnership the commercial enterprise benefits from the specific attitude delivered with the aid of using every partner"
        />
      </div>
    </div>
  );
}
