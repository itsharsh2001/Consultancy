import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
      Following are the minimal necessities to done registration as producer company: 
      <li> The principal objective of the company have to be too as provided in Section 581B of Companies Act, 1956 </li><li> Minimum 10 individuals (who're a producer) or as a minimum 2 producer institutes have to subscribe the stocks of the company </li><li>3) Minimum five directors with inside the company, one in all which have to be Indian citizen and resident </li><li>4) The registered office of the company have to be located in India.</li>
    </div>
  );
  const faq2 = (
    <div>
      Foreign funding in any shape is unlawful in corporations engaged or
      proposes to have interaction with inside the following business:
      <li>The commercial enterprise of chit fund; or </li>
      <li>Nidhi Company; or</li>
      <li>
        iii) Agricultural or plantation activities (excluding floriculture,
        horticulture, development of seeds, animal husbandry, pisciculture,
        cultivation of vegetables, mushrooms, etc., under managed conditions,
        services associated with the agro & allied zone and tea plantations); or
      </li>
      <li>
        iv) Real Estate commercial enterprise, or construction of farm houses
        (Does not consist of the improvement of townships, construction of
        residential/industrial premises, roads or bridges); Or
      </li>
      <li>v) Trading in Transferable Development Rights (TDRs)</li>
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
        heading="What is the minimum capital requirement to start a Partnership Firm? 
        "
        para="Formation of Partnership Firm does not require any minimum quantity. It can be commenced with any quantity of capital contribution by the partners. The Partners can make a contribution in any quantity agreed and in any shape being tangible (cash, premise) or intangible (goodwill, intellectual property). The Partners can introduce capital in any ratio, equal or uneven."
      />
      <FAQ
        heading="What are the advantages of a registered partnership firm?
"
        para="Only a registered partnership firm can claim a set off (i.e. mutual adjustment of debts owned by the disputant parties to one another) or other proceedings in a dispute with a third party. Hence, it is advisable for partnership firms to get it registered sooner or later. Also, only a registered partnership firm can file a suit in any court against the firm or other partners for the enforcement of any right arising from a contract or right conferred by the Partnership Act. An unregistered Partnership Firm can get registered at any point of time after its establishment."
      />
      <FAQ
        heading="How much time does it take to register a partnership?"
        para="The registration of a Partnership Firm in India can take up to twelve to fourteen working days. However, the time taken to issue certificates of incorporation can also additionally vary as consistent with the policies of the concerned state. The registration of a Partnership Firm is concern to Government processing time which varies for every State."
      />
      <FAQ
        heading="Which points should be considered by all partners while drafting partnership deed?"
        para="The Partners must especially point out about the principle object and activities alongside essential clauses associated with capital contribution, profit sharing ratio of the partners, control and management of Partnership Firm. Further, the signed Partnership Deed will be duly stamped and notarized."
      />
      <FAQ
        heading="Is Partnership Deed Registration compulsory?
"
        para="The Partnership Act offers that each registered and unregistered partnerships are legitimate and known through law. Partnership registration isn't obligatory however is useful because of consequences of non-registration. Mostly, the companies at preliminary stage opt for unregistered partnership until they attain solid stage. The unregistered partnership may be registered at any time after its formation."
      />
      <FAQ
        heading="Whether audit is required for Partnership Firm?
"
        para="Partnership companies do not need to put together audited statements for every year. However relying at the turnover and some different criteria, a tax audit statement is probably necessary."
      />
      <FAQ
        heading="If all partners wish to end the partnership, how can they do so?
"
        para="If the partners of a organization want to give up the partnership, they could achieve this through dissolving the partnership through notice, if it is a partnership of will. A partnership may be dissolved according with the phrases laid out with inside the Partnership Deed, or they could achieve this through developing a separate agreement."
      />
    </div>
  );
}
