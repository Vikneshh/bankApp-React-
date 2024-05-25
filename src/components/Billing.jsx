
import {apple,bill,google} from "../assets";
import styles,{layout} from "../style";
const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="Billing image" className="w-[100%] h=[100%] relative z-[5]" />
        {/* Two self closing div for the gradients effects */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={`${layout.sectionInfo} md:ml-40`}>
        <h2 className={styles.heading2}>
          Easily control your <br  className="sm:block hidden"/> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              We will take care of the billing and invoices of your company with secure methods
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="Apple play store" className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"/>
          <img src={google} alt="Google play store" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
        </div>
      </div>

    </section>
  )
}

export default Billing