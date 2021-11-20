import classes from "./advantagesCard.module.css"

export default function AdvantagesCard(props) {
    return (
        <div>
            <div className={classes.card}>
            <img className={classes.cardImg} src={props.image} alt="" />
            <p className={`${classes.cardP} ${classes.cardP1}`}>{props.text1}</p>
            <p className={`${classes.cardP} ${classes.cardP2}`}>{props.text2}</p>
            </div>
        </div>
    )
}
