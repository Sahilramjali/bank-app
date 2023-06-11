import { bill,apple,google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          className="w-[100%] h-[100%] object-contain relative z-[5]"
          alt="billing"
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
        </p>
        <div className="mt-6 sm:mt-10 flex flex-row flex-wrap">
            <img src={apple} alt="apple-store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"/>
            <img src={google} alt="play-store" className="w-[128.86px] h-[42.05px] object-contain  cursor-pointer"/>
        </div>
      </div>
    </section>
  );
};
export default Billing;
