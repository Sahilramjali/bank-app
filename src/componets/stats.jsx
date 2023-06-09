
import { stats } from "../constants";
import styles from "../style";
import useAos from "../hooks/aos";
const Stats=()=>{
  useAos();
    return(
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat)=>(
              <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} data-aos='fade-left'>
                <h4 className="text-white font-poppins xs:text-[40px] text-[30px] font-semibold xs:leading-[53px] leading-[43px]">
                    {stat.value}
                </h4>
                <p className="font-popppins text-gradient font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3">{stat.title}</p>
              </div>
            ))}
        </section>
    )
}
export default Stats;
