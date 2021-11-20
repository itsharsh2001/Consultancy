import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of converting Proprietorship to Partnership
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="No Fixed Capital Funding is Required"
          text2="There is no predefined limit on partners’ capital contribution, permitting the partners for putting in optimum quantities as capital and make choices about the withdrawals mutually."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="With conversion, you do now no longer want to begin new business "
          text2="With conversion, all movable and immovable properties of the company automatically vest in the partnership. Hence, the conversion is simple and hassle-free. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Shared Liabilities"
          text2="The term partnership means two or more than two persons coming together to do business to achieve some common business objective. The partnership here means that all the responsibilities of the business has to shared by all of the partners. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Partner net worth is increased"
          text2="Since the partners share the business responsibilities, there is a distribution of Post-Tax income between the partners with no extra tax liability. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Expertise "
          text2="As nicely as gaining financing from a brand new partner, a enterprise proprietor can enjoy the partner's professional expertise and contacts."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Assistance
          "
          text2="The limited partner can assist control the enterprise in addition to providing information and skills. This may be especially beneficial if a sole owner is a professional in his service or product however lacks experience in running and growing a business."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Single Project"
          text2="The limited partnership association is often appropriate for cases where the brand new partner most effective needs to be concerned with the only owner on a single project."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Registration is not necessary"
          text2="Registration of partnership isn't always mandatory. However, it's far commonly really helpful to get it registered with the Register of Firms."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Less formal with fewer legal obligations"
          text2="One of the primary benefits of a partnership enterprise is the lack of formality in comparison with handling a limited company."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Privacy"
          text2="Compared to a limited company, the affairs of a partnership business can be saved confidential by the partners."
        />
      </div>
    </div>
  );
}
