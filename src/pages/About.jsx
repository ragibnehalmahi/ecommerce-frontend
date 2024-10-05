import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w2/4 text-gray-600'>
      <p>Forever was born out of a passion for innovation and a desire to Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo soluta sunt nobis vero quos?</p>
      <p>Since our inception we have worked tirelessly to curate a diverse selection Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, illum.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>Our mission at Forever is to empower customers with choice,convenience, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eum!</p>
      </div> 

    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
</div>
<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>we meticulously select and vet each product to ensule it ensure it meets our Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quod!</p>

  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-gray-600'>we meticulously select and vet each product to ensule it ensure it meets our Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quod!</p>

  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>we meticulously select and vet each product to ensule it ensure it meets our Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quod!</p>

  </div>

</div>
<NewsletterBox/>
    </div>
  )
}

export default About