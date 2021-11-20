import classes from './count_HWW.module.css'

export default function count_HowWeWork(props) {
    return (
        <div>
            <div className={classes.container}>
            <p className={classes.containerP}>{props.number}</p>
            </div>
        </div>
    )
}
