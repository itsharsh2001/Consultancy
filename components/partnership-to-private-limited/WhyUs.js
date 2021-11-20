import classes from "./WhyUs.module.css";
import { useState } from "react";
import Card from "./ui/whyUsCard.js";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export default function WhyUs() {
  const Image1 = "https://www.onlinelegalindia.com/services/include/image/recognized.svg"
  
  const Image2 = "https://www.onlinelegalindia.com/services/include/image/recognized.svg"

  const Image3 = "https://www.onlinelegalindia.com/services/include/image/recognized.svg" 
    

  const [data1, setData1] = useState({
    image: Image1,
    text: "Data Security & Trust",
  });
  const [data2, setData2] = useState({
    image: Image2,
    text: "Trained & Professional Experts",
  });
  const [data3, setData3] = useState({
    image: Image3,
    text: "Affordable Than Other Professionals",
  });
  // const [data4, setData4] = useState({
  //   image: Image3,
  //   text: "On Time Service",
  // });
  // const [data5, setData5] = useState({
  //   image: Image3,
  //   text: "Super Fast Service",
  // });

  const leftArrowClickHandler = () => {
    let firstData = data1;
    setData1(data2);
    setData2(data3);
    setData3(firstData);
  };
  const rightArrowClickHandler = () => {
    let lastData = data3;
    setData3(data2);
    setData2(data1);
    setData1(lastData);
  };
  return (
    <div>
      <div>
        <h2 className={classes.text}>Why Us?</h2>
        <hr className={classes.hr} />
      </div>
      <div className={classes.flex}>
        <PlayArrowIcon
          onClick={leftArrowClickHandler}
          className={classes.icon1}
          fontSize="large"
        />

        <Card
          image={data1.image}
          text={data1.text}
        />

        <span className={classes.card2}>
          <Card
            image={data2.image}
            text={data2.text}
          />
        </span>

        <span className={classes.card3}>
          <Card
            image={data3.image}
            text={data3.text}
          />
        </span>

        <PlayArrowIcon
          onClick={rightArrowClickHandler}
          className={classes.icon2}
          fontSize="large"
        />
      </div>
    </div>
  );
}
