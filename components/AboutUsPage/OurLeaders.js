import classes from "./OurLeaders.module.css";

export default function OurLeaders() {
  return (
    <div className={classes.container}>
      <h3>Our Leaders</h3>
      <h4>
        We have got highly respected professionals leading from the front,
        keeping people-first approach in everything we do.
      </h4>
      <div>
        <span>
          <img
            src="https://www.legalwiz.in/wp-content/uploads/gb-profile.jpg"
            alt="Image Not Found"
          />
          <h5>Shrijay Sheth</h5>
          <h6>Founder</h6>
          <p>
            12+ formative years with some of the keenest minds in eCommerce &
            FinTech industry, globally! Shrijay’s immersive experience as a
            consultant at growth stories like Bouqs.com, MeUndies.com,
            HopSkipDrive.com, and CandyClub.com have shaped him into a highly
            sought after professional.
          </p>
        </span>
        <span>
          <img
            src="https://www.legalwiz.in/wp-content/uploads/ss-profile.jpg"
            alt="Image Not Found"
          />
          <h5>Gaurav Barot</h5>
          <h6>Technology Partner</h6>
          <p>
            Highly respected name in Ahmedabad IT/ITES industry, with decades of
            experience in building and scaling tech portals for some of the most
            iconic digital-first brands in India and abroad. Immense experience
            in enterprise-level portal development with Liferay, Alfresco and
            other Java based platforms.
          </p>
        </span>
      </div>
    </div>
  );
}
