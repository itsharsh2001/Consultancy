import classes from "./whyUsCard.module.css";

export default function whyUsCard(props) {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.flex}>
            <img className={classes.image} src={props.image} alt="" />
            <p className={classes.text}>{props.text}</p>
            </div>
            </div>
        </div>
    )
}
