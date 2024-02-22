'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights,} from '../constants';
import { staggerContainer } from '../utils/motion';
import {TitleText } from '../components/CustomText';
import InsightCard from './InsightCard';

const Insights = () => (
  <section className={`px-5 py-14 md:px-10 bg-gray-300 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText title={<>Digital Skills Centre</>} textStyles="text-center" />
      <p className='py-5 font-normal  text-[20px] text-center '>Welcome to Celestial Crafters Digital Skills Centre, where empowerment meets opportunity. Situated in the heart of Nairobi's slums, our center is dedicated to providing digital skills training to vulnerable girls and young women.</p>
      <div className="mt-[50px] flex flex-col gap-[35px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item}  index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
