import ContactComponent from "./ContactComponent";
import FaqComponent from "./FaqComponent";
import FeaturesComponent from "./FeaturesComponent";
import HeroComponent from "./HeroComponent";


export default function HomePage() {
  return (
    <div>
        <HeroComponent/>
        <FeaturesComponent/>
        <FaqComponent/>
        <ContactComponent/>
    </div>
  )
}
