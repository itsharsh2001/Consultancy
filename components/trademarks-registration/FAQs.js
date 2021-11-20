import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    A title (personal or surname of the applicant or the person’s signature)
A newly coined or invented phrase or any different arbitrary phrase from dictionary, now not being vividly descriptive of the persona or pleasant of the product or service
<li>Alphanumeric or letters or numerals or aggregate of them</li>
<li>Image, Symbol, Monograms, 3D shapes, letters etc.</li>
<li>Sound marks in audio format.</li>

    </div>
  );
  const faq2 = (
    <div>
      The copyright proprietor has the extraordinary rights to:
<li>Reproduce and distribute the work in copies or phonorecord (material object i.e. an audio tape or CD, or an MP3 file. ) to the public through sale or switch of possession or license.</li>
<li>Make additions to the unique work or regulate it, display, existing or function them amongst the public; and</li>
<li>Exclude others to declare possession or use besides the authentic creators’ permission.</li>


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
        heading="What is a Trademark? 
        "
        para="Trademark is a mental property consisting of recognizable sign or design in order to pick out merchandise or offerings from a precise source, even though trademarks that are used to become aware of offerings are referred to as provider marks."
      />
      <FAQ
        heading="What cannot be registered as trademark?
"
        para="Any mark that is same or deceptively comparable to an present registered trademark, or a trademark for which the application for registration is already in process, such trademarks can't be registered. Also, a mark that would in all likelihood reason a deception or confusion, or that seems offensive can also no longer be registered. Geographical names, frequent names, frequent change phrases and frequent abbreviation are additionally now not register able."
      />
      <FAQ
        heading="How long does it take to register a trademarks?"
        para="It takes at least 15 to 18 months for Trademark registration in India as soon as applied. Post which the proprietor can use (R) image beside the Trademark. However, as quickly as the on line Trademark Application is filed, the applicant can begin the usage of the (TM) symbol. The registration may additionally get delayed due to the verification procedure.
        "
      />
      <FAQ
        heading="Will the trademark will be valid outside India?"
        para="The registration software filed underneath the Trademark Act, 1999 is proven and registered in India and it valid only in India."
      />
      <FAQ
        heading="What if any individual has a comparable word trademarked?"
        para="Though you can’t get the word however nonetheless all is no longer lost. You can sketch a special brand alternatively for your enterprise and consist of the identify in it like BMW. The title is inside the emblem making it a tremendous example. A prefix could additionally be permissible. This is recognized as a logo composite mark. Though there is a way out, it is nice to have a unique name."
      />
      <FAQ
        heading="What are the extraordinary types of emblems I can have?"
        para={faq1}
      />
      <FAQ
        heading="When Can I Use ™ Symbol?"
        para="Once the trademark utility is successful, you get hold of an acknowledgement offering you the proper to use the TM symbol. After the registration of it, you can use the ® symbol."
      />
      <FAQ
        heading="Can a registered trademark be amended later?"
        para="Yes, the proprietor can amend the filed mark as per the provision of Section 22 of the Trademarks Act. This lets in the change of the mark if it does no longer quantity to a considerable exchange in the persona of the mark. Any superficial or insignificant persona or characteristic of the stated mark can be amended on a situation – Filing a request in prescribed layout alongside with the copies of the amended label mark"
      />
      <FAQ
        heading="Is the trademark dependable for elimination on the ground of non-use?"
        para="Yes, a registered trademark can be removed due to the fact of non-use. If it is no longer used for a non-stop duration of 5 years from the date of registration of the trademark and that the utility for removal is made after three months from the expiry of these 5 years, then it can be removed."
      />
      <FAQ
        heading="What is trademark class? How to locate appropriate class?"
        para="Controller General of Patents, Designs, and Trademarks has labeled goods and services underneath 45 classes. Your application need to point out the class/classes that the goods/services represent. The trademarks are registered only below these classes. Our professionals will assist you to locate relevant and associated classes. For every class, separate software is filed by way of paying prescribed Government fee."
      />
    </div>
  );
}
