import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    The dissolution deed would cover: 
<li>1) The date on which the partnership will quit trading and be dissolved and the way it is going to be wound up.</li>
<li>2) What the companions can and can't do from the date of dissolution till the partnership is wound up. </li>
<li>3) The return of documents, the belief of the partnership’s assets and the termination of contracts and different arrangements for the discharge of the partnership’s liabilities.</li>
<li>4) The training and approval of the partnership’s very last set of accounts.</li>
 <li>5) The distribution of any partnership monies after the liabilities had been discharged. </li>
<li>6) The retention of records</li>
<li>7) The notification of the dissolution</li>
 </div>
  );
  const faq2 = (
    <div>
     <li> 1) If the partnership was created for a fixed time period, then at the expiration of the time period the partnership can be dissolved.</li>
<li> 2) If the partnership has been created for a selected task or goal, then after the completion of that undertaking or achievement of that goal the partnership might come to an end.</li>
<li>3)If one of the companions dies than it’s prima facie that the partnership might come to an end until it's far provided in any other case in the settlement both express or implied from the conduct of the companions. </li>

    </div>
  );

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <hr />
        <h2 className={classes.containerh2}>FAQ</h2>
        <hr />
      </div>
      
      <FAQ
        heading="What does the dissolution deed of a partnership corporation cover?"
        para={faq1}
      />
      <FAQ
        heading="Which are the contingencies due or which a partnership needs to be dissolved?"
        para={faq2}
      />
      <FAQ
        heading="What are the rights of companions post dissolution? "
        para="Every companion is entitled to equal rights or according to the contract. All the companions are entitled to the property of the firm implemented in payment of the debts and liabilities of the corporation and to have the excess distributed a number of the companions or their representatives in keeping with their rights. These rights are given while winding up of the corporation is taking place"
      />
      <FAQ
        heading="What is the distinction among the dissolution date and the winding up date?"
        para="When the partnership ceases to exist, that date is called the dissolution date. After this there's no commercial enterprise relationship among the companions. After which the companions will complete any unfinished work, settle any liabilities, recognize any partnership assets and in any other case wind up the partnership. The winding update is the date when the winding-up of the partnership is completed."
      />
      <FAQ
        heading="How are accounts settled for finishing up of the partnership?"
        para="First, the Losses of the company might be paid out. The Assets of the company and the capital contributed by the companions to set-off losses of the company will be applied:-
        Third party debts might be paid first. Next, mortgage amount taken with the aid of using a company from any associate might be repaid to that partner Capital contributed by every associate might be repaid to him in the capital contribution ratio. Balance amount might be shared some of the companions of their profit sharing ratios. Upon realization, all property might be sold off in the market, and the cash realizing out of this sort of sale might be used for paying the liabilities. Assets or liabilities can also be taken over with the aid of using the associate(s) for which the respective partner capital accounts might be adjusted by such amount.
       "
      />
      <FAQ
        heading="What are the Liabilities of companions after dissolution?"
        para="The companions are liable to the third parties for any act carried out before the dissolution. The liability of a companion finishes while all of the event are completed that has been taken up before the dissolution of the organization till public notice is given of the dissolution."
      />
      <FAQ
        heading="What is the distinction among dissolution of partnership organization and dissolution of partnership? "
        para="Dissolution of a partnership takes place when a partner ceases to be associated with the business, while dissolution of a organization is the winding up the business."
      />
    </div>
  );
}
