import classes from "./Advantages.module.css";
import Card from "./ui/advantagesCard.js";

export default function Advantages() {
  return (
    <div>
      <div className={classes.text}>
        <hr className={classes.texthr} />
        <h2 className={classes.texth2}>
          Advantages of Conversion of Private Limited into Public Limited
        </h2>
        <hr className={classes.texthr} />
      </div>

      <div className={classes.container}></div>
      <div className={classes.container2}></div>
      <div className={classes.cards}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Limited liability "
          text2="The liability of every shareholder or member is confined. This feature stays intact with this conversion. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Raising capital via public issue of shares"
          text2=" The ability to elevate shares is the most useful element of a public limited company. The quantity of capital that may be raised is an awful lot extra than a private limited company.
          "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Transferability of stocks"
          text2="Shares in a public limited business enterprise are effortlessly transferable in comparison to the private limited business enterprise. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Brand Awareness"
          text2="When the enterprise is going public, it receives indexed with inside the inventory exchange and as a result automatically extra people get to understand about and its functions."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Deposits"
          text2="Public Companies can receive deposits from public subject to Section seventy six of Companies Act 2013 and the rules."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Accelerated negotiation possibilities
          "
          text2="Accelerated negotiation possibilities with providers in terms of prices because large businesses can attain economies of scale"
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Listing of Shares"
          text2="Through conversion of private limited to public limited company, the entity can list its stocks in a known stock exchange."
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Countless sources for Fund-Raising"
          text2="
          A Public Limited Company can raise its resources by crowd-funding or from the common people’s involvementfollowing the legal aspects. It helps an entity surviving in the marketplace and going for new ventures with ease"
        />
      </div>

      <div className={classes.container3}></div>
      <div className={classes.card2}>
        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Transferability of shares"
          text2="The shares of a public limited company are more easily transferable than those in the private equivalent, meaning shareholders benefit from liquidity. "
        />

        <Card
          image="https://www.onlinelegalindia.com/images/icon/liability.svg"
          text1="Steady Business Growth"
          text2="Private Limited Companies can adapt tech-driven techniques and expand their business rapidly with the accessibility to an adequate amount of capital."
        />
      </div>
    </div>
  );
}
