import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const useAos=()=>{
    useEffect(()=>{
        AOS.init(
            {
                duration:1000,
                offset:100,
            }
        );
    },[])
}
export default useAos;