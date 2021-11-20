import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <hr />
        <h2 className={classes.containerh2}>
        Reasons of change in Partnership Deed
        </h2>
        <hr />
      </div>
      <FAQ
        heading="Change Business Activity or name"
        para="If required to adopt new commercial enterprise activity, the partners have to amend the commercial enterprise clause of the partnership deed enumerating the brand new activities."
      />

      <FAQ
        heading="Change capital and profit sharing ratio"
        para="Where capital is the need of commercial enterprise, return is need for partners. The capital may be improved to increase commercial enterprise or different requirements."
      />

      <FAQ
        heading="Change of Partners and rights and responsibilities"
        para="In some of these instances of appointment, addition, removal, resignation or demise of a partner, supplementary partnership deed for a alternate of companions is executed."
      />

      <FAQ
        heading="Change different clauses"
        para="Name of partnership or alternate in place of business, the addition of department workplace etc. may be made effective through executing the supplementary deed."
      />
      <FAQ
        heading="Change of Duration of Partnership"
        para="When the length of the partnership is particularly determined since the incorporation of the partnership firm then any change in the period has to be together determined and the same shall carry the change the partnership deed."
      />
      <FAQ
        heading="Change in Management Structure"
        para="The management of the organization to deal with the organization and the persons accountable for certain work or precise branch is generally fixed. So, any change in it shall require the alternate in partnership deed."
      />
    </div>
  );
}
