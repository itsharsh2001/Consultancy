import classes from "./MainContent.module.css";
import SearchIcon from '@material-ui/icons/Search';

export default function MainContent() {
  return (
    <div className={classes.container}>
      <h3>Blog</h3>

      <div className={classes.searchField}>
        <input type="text"/>
        <span><SearchIcon fontSize="large" style={{fill:"#FFF"}} /></span>
      </div>

      <div className={classes.imageCard}>
        <span>
          <img
            src="https://www.legalwiz.in/wp-content/uploads/gb-profile.jpg"
            alt="Image Not Found"
          />
          <div>
          <p>
            12+ formative years with some of the keenest minds in eCommerce &
            FinTech industry, globally! Shrijay’s immersive experience as a
            consultant at growth stories like Bouqs.com, MeUndies.com,
            HopSkipDrive.com, and CandyClub.com have shaped him into a highly
            sought after professional.
          </p>
          <button type="button">Read More</button>
          </div>
        </span>

        <span>
          <img
            src="https://www.legalwiz.in/wp-content/uploads/ss-profile.jpg"
            alt="Image Not Found"
          />
          <div>
          <p>
            12+ formative years with some of the keenest minds in eCommerce &
            FinTech industry, globally! Shrijay’s immersive experience as a
            consultant at growth stories like Bouqs.com, MeUndies.com,
            HopSkipDrive.com, and CandyClub.com have shaped him into a highly
            sought after professional.
          </p>
          <button type="button">Read More</button>
          </div>
        </span>

        <span>
          <img
            src="https://www.legalwiz.in/wp-content/uploads/gb-profile.jpg"
            alt=""
          />
          <div>
          <p>
            12+ formative years with some of the keenest minds in eCommerce &
            FinTech industry, globally! Shrijay’s immersive experience as a
            consultant at growth stories like Bouqs.com, MeUndies.com,
            HopSkipDrive.com, and CandyClub.com have shaped him into a highly
            sought after professional.
          </p>
          <button type="button">Read More</button>
          </div>
        </span>

        <span>
          <img
            src="https://www.legalwiz.in/wp-content/uploads/ss-profile.jpg"
            alt=""
          />
          <div>
          <p>
            12+ formative years with some of the keenest minds in eCommerce &
            FinTech industry, globally! Shrijay’s immersive experience as a
            consultant at growth stories like Bouqs.com, MeUndies.com,
            HopSkipDrive.com, and CandyClub.com have shaped him into a highly
            sought after professional.
          </p>
          <button type="button">Read More</button>
          </div>
        </span>
      </div>

      <button className={classes.button} type="button">Load More Posts</button>
    </div>
  );
}
