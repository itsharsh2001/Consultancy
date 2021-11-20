import classes from "./FAQs.module.css";
import FAQ from "./ui/FAQ.js";

export default function FAQs() {
  const faq1 = (
    <div>
    An authentic introduction which is in a tangible form, i.e. a DVD or a e book or a painting
<li>Literary works: books, laptop programs, and any different kind of compilations.</li>
<li>Online writing, such as a weblog or collection of articles</li>
<li>Musical works and sound recordings along with lyrics cinematographed films.</li>
<li>Artistic works: which include maps and architectural plans, graphics, sculptures, paintings, etc..</li>
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
        heading="What can be registered as a copyright? 
        "
        para={faq1}
      />
      <FAQ
        heading="What can't be blanketed thru copyright registration in India?
"
        para="Works that are now not constant in a tangible structure such as ideas, procedures, methods, systems, processes, concepts, principles, or discoveries, unwritten speeches etc. can't be copyrighted."
      />
      <FAQ
        heading="Can I sue any one legally if I have my copyright registered?"
        para="Yes, you can ship a felony observe to that person. And, even after that the infringement continues, you can declare your distinctive proper in the court docket of regulation to claim damages.
        "
      />
      <FAQ
        heading="Can I sell or transfer my copyright?"
        para="Yes, an authentic creator may also sell, transfer, assign or license their copyright."
      />
      <FAQ
        heading="What is the distinction between trademark and copyright?"
        para="A trademark is a given to guard a company name, emblem or slogan. While copyright is a safety given to special content material like a book, music, videos, songs and different creative content. In the frequent practice, an internet site proprietor commonly protects simply the content material and now not the aiding works like snap shots and movies uploaded on the internet site as they are certain to exchange in accordance to the enterprise requirement."
      />
      <FAQ
        heading="Can I copyright my internet site?"
        para="Yes, you can copyright unique authorship on a website. But a area identify can't be included beneath the copyright law. However, each and every work e.g. photographs, movies and so on would be viewed as a separate work and a separate software rate wishes to be paid for every on them."
      />
      <FAQ
        heading="What are the rights of a Copyright owner?"
        para={faq2}
      />
      <FAQ
        heading="What is the distinction between a patent and copyright?"
        para="The important a distinction between a patent and copyright is on the foundation of their objective. The patent protects an invention of a new product or a process, from being stolen by way of others and to facilitate commercialization of its use by means of the inventor. On the different side, copyright protects unique works, e.g. literary works, videos, song records, inventive works, architecture, software program etc. from being plagiarized."
      />
      <FAQ
        heading="Do I want to bodily current for the process?"
        para="No, You don’t want to be bodily current for the process, Online Legal India is an on-line catering platform all you want is net connection in your phone/computer and the required files with you and we can get the job completed no things even if you are current at remotest vicinity of the India."
      />
      <FAQ
        heading="What can be copyrighted?"
        para="Copyright works encompass books, sound recordings, music, inventive work, cinematographic films, dramatic, pc programs, databases, advertisements, and art work."
      />
    </div>
  );
}
