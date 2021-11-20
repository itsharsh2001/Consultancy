import classes from './CardGreen.module.css'
import SecurityIcon from '@material-ui/icons/Security';

function CardGreen(props) {
    return (
        <div className={classes.cardgreen}>
            <div className={classes.innergreen}>
                <SecurityIcon className={classes.icon} fontSize="large" style={{ fill: "#ffb403" }} />
                {props.children}
            </div>
        </div>
    )
}

export default CardGreen;