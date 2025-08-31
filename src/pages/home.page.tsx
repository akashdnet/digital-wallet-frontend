import FAQSection from '@/components/modules/home/faq';
import FeatureSection from '@/components/modules/home/feature-section';
import HeroSection from '@/components/modules/home/hero-section';
import Post from '@/components/modules/home/post'
import TestimonialsSection from '@/components/modules/home/testimonials-section';
import HowItWorksSection from '@/components/modules/home/work-section';
import { useGetAllPostQuery } from '@/redux/features/jsonplaceholder.api';




export default function Home() {
    

  return (
    <div className='w-full '>


    <HeroSection/>
    <FeatureSection/>
    <HowItWorksSection/>
    <TestimonialsSection/>
    <FAQSection/>
    </div>
  )
}
