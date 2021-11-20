import classes from "./testimonialStar.module.css";
import GradeIcon from "@material-ui/icons/Grade";

export default function TestimonialStar(props) {
  return (
    <div>
      {Array(props.rating)
        .fill()
        .map((_, i) => (
          <GradeIcon fontSize="large" />
        ))}
    </div>
  );
}
