import classes from "./LegalDrafting.module.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Link from "next/link";

function LegalDrafting(props) {
  return (
    <div className={classes.dropdown} onPointerLeave={props.mouseOutHandler}>
      <span>
      <div className={classes.vl}></div>

        <span>
          <h3>Employment</h3>
          <ul>
          <Link href="/legal-drafting/Appointment-letter">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Appointment Letter
            </li>
            </Link>
            <Link href="/legal-drafting/completion-of-probation-letter">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Completion of Probation Letter
            </li>
            </Link>
            <Link href="/legal-drafting/employee-termination-letter">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Employee Termination Notice
            </li>
            </Link>
            <Link href="/legal-drafting/employee-contract">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Employment Contract
            </li>
            </Link>
            <Link href="/legal-drafting/employment-agreement">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Employment Agreement
            </li>
            </Link>
            <Link href="/legal-drafting/Job-offer-rejection-letter">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Job Offer Rejection Letter
            </li>
            </Link>
            <Link href="/legal-drafting/nda-for-employee">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              NDA for Employees
            </li>
            </Link>
            <Link href="/legal-drafting/offer-letter">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Offer Letter
            </li>
            </Link>
            {/* <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Employee Relieving Letter
            </li>
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Consumer Complaint Letter
            </li> */}
          </ul>
        </span>
        <div className={classes.vl}></div>
        <span>
          <h3>Corporate</h3>
          <ul>
          <Link href="/legal-drafting/Adding-a-director-resolution">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Adding a Director Resolution
            </li>
            </Link>
            <Link href="/legal-drafting/Resignation-of-director-resolution">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Resignation of Director resolution
            </li>
            </Link>
            <Link href="/legal-drafting/No-Objection-certificates">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              No Objection Certificate (for address proof)
            </li>
            </Link>
            <Link href="/legal-drafting/Private-constrained-business-enterprise-to-LLP-resolution">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Pvt Ltd Company to LLP resolution
            </li>
            </Link>
            <Link href="/legal-drafting/Shareholders-agreement">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Shareholders Agreement
            </li>
            </Link>
            <Link href="/legal-drafting/Drafting-Term-Sheet">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Term Sheet
            </li>
            </Link>
            <Link href="/legal-drafting/Private-restrained-enterprise-to-Public-restricted-organization-resolution">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Private Limited Company to Public Limited Company resolution
            </li>
            </Link>
          </ul>
        </span>
        <div className={classes.vl}></div>
        <span>
          <h3>Daily Business</h3>
          <ul>
            <Link href="/legal-drafting/Direct-Selling-Agreement">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Direct Selling Agreement
            </li>
            </Link>
            <Link href="/legal-drafting/Final-Invoice">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Final Invoice
            </li>
            </Link>
            <Link href="/legal-drafting/Buy-order">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Buy Order
            </li>
            </Link>
            <Link href="/legal-drafting/Statement-of-Work">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Statement of Work
            </li>
            </Link>
          </ul>
        </span>
        <div className={classes.vl}></div>
        <span>
          <h3>Legal Agreements</h3>
          <ul>
          <Link href="/legal-drafting/Legal-notice">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Legal Notice
            </li>
            </Link>
            <Link href="/legal-drafting/POWER-OF-ATTORNEY">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Power of Attorney
            </li>
            </Link>
            <Link href="/legal-drafting/RTI">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Right to Information
            </li>
            </Link>
            <Link href="/legal-drafting/Termination-of-agreement">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Termination of Agreement
            </li>
            </Link>
          </ul>
        </span>
        <div className={classes.vl}></div>

      </span>

      <span>
      <div className={classes.vl}></div>

        <span>
          <h3>Banking & Finance</h3>
          <ul>
          <Link href="/legal-drafting/Account-Opening-Resolution">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Account Opening Resolution
            </li>
          </Link>
          <Link href="/legal-drafting/cheque-stop-payment-letter">  
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Cheque Stop Payment Letter
            </li>
            </Link>
            <Link href="/legal-drafting/Promissory-note">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Promisory note
            </li>
            </Link>
            <Link href="/legal-drafting/Section138-Notice">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Section 138 (Cheque Dishonor Notice)
            </li>
            </Link>
          </ul>
        </span>
        <div className={classes.vl}></div>
        <span>
          <h3>Business Agreements</h3>
          <ul>
          <Link href="/legal-drafting/Extension-of-Agreement">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Extension of Agreement
            </li>
            </Link>
            <Link href="/legal-drafting/Independent-Contractor-Agreement">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Independent Contractor Agreement
            </li>
            </Link>
            <Link href="/legal-drafting/Memorandum-of-Understanding">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Memorandum of Understanding
            </li>
            </Link>
            <Link href="/legal-drafting/NDA-for-Third-Party">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              NDA for Third Party
            </li>
            </Link>
            <Link href="/legal-drafting/Website-Disclaimer-Policy">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Website Disclaimer Policy
            </li>
            </Link>
          </ul>
        </span>
        <div className={classes.vl}></div>
        <span>
          <h3>Real Estate</h3>
          <ul>
          <Link href="/legal-drafting/lease-deed-residential">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Lease Deed – Residential
            </li>
            </Link>
            <Link href="/legal-drafting/lease-deed-commercial">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Lease Deed – Commercial
            </li>
            </Link>
            <Link href="/legal-drafting/Notice-to-vacate-Tenant">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Notice to vacate Tenant
            </li>
            </Link>
          </ul>
        </span>
        <div className={classes.vl}></div>
        <span>
          <h3>Document Kits</h3>
          <ul>
          <Link href="/essential-business-agreements-kit">
            <li>
              <ArrowRightIcon fontSize="small" style={{ fill: "#ffb403" }} />
              Essential Business Agreements Kit
            </li>
            </Link>
          </ul>
        </span>
        <div className={classes.vl}></div>

      </span>
    </div>
  );
}

export default LegalDrafting;
