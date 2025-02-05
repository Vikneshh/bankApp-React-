 import {feedback} from "../constants";
 import styles from "../style";
 import FeedbackCard from './FeedbackCard';
const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* A self closing div for the gradients effects */}
      <div className="absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient -right-[50%] "/>
      <div className="w-full flex justify-between items-center flex-col sm:mb-16 mb-6 relative md:flex-row z-[1]">

        <h1 className={styles.heading2}>What people are <br className="sm:block hidden"/> saying about us </h1>
        <div className="w-full md:mt-0 mt-6 ">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow business anywhere on the planet</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
        {feedback.map((card)=>(
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials