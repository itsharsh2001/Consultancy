import classes from './CardMango.module.css'

function CardMango(props) {
    return (
        <div className={classes.cardmango}>
            {props.children}
        </div>
    )
}

export default CardMango;
