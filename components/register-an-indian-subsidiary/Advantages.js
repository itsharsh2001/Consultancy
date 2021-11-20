import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of foreign company registration in India
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Separate Entity"
          text2="Indian Subsidiary is any enterprise this is owned via way of means of a overseas enterprise is referred to as an Indian Subsidiary. The Companies Act, 2013 governs the registration system for the Indian Subsidiary Company. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Easy access gate"
          text2="When in comparison to different business structure, the access to Indian enterprise sphere is simple as a private company. Apart from liberal norms, the set-up is a hassle-free deal as a company. 
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Permanent established order in India"
          text2="By registering a subsidiary in India, the foreign nationals or entities set up a everlasting workplace and a lawful entity in India. An organization registered in India has separate legal identification than the promoters and the stockholders."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Expansion with limited liability "
          text2="The ultimate aim of setting a foreign department occurs to be growth of the business. A limited liability is an added benefit in terms of getting into with inside the complete new market. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Tax benefits"
          text2="A parent company can substantially reduce tax liability through deductions allowed by the state. For parent companies with multiple subsidiaries, the income liability from gains made by one sub can often be offset by losses in another."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Perpetual Succession 
          "
          text2="The Indian Subsidiary will be successful even after there are numerous modifications with inside the control of the organization.The operations can't be halted,and capabilities may be without difficulty carried on."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Large Population"
          text2="Macro economically a large populations and a large marketplace without boundary lines with typically installed logistics to do enterprise is one of the primary benefits of beginning a enterprise in India."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Business pleasant Laws "
          text2="In current years, numerous important bills which are useful for maximum business sectors were passed in the Indian Parliament. The Goods and Services Tax Bill have expanded efficiency in the movement of products throughout India."
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Low Operational Cost "
          text2="There is a noticeable Low expense of operation viable from infrastructures to phones to internet to labor to salaries to something required to installation a business. Moreover, people are geared up to work at low cost."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Vast Trade Network"
          text2="India boasts a extensive community of technical and control establishments which are of the best global requirements backed through nearby and bilateral free trade agreements"
        />
      </div>
    </div>
  );
}
