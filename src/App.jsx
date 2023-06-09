// import React from 'react'
import styles from "./style";
import {
  NavBar,
  Hero,
  Billing,
  CardDeal,
  Business,
  Clinets,
  Cta,
  Stats,
  Footer,
  Testimonials,
} from "./componets/index";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      {/* hero div  */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clinets/>
          <Cta/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
