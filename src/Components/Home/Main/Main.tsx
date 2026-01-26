import { AboutSection } from "../../About/AboutSection"
import Timeline from "../../About/Timeline"
import BrandPage from "../../Brand/BrandPage"
import QualityAssurance from "../../Services/QualityAssurance"
import ServicesCards from "../../Services/ServicesCards"
import { Hero } from "../Hero/Hero"


function Main() {
    return (
        <div>
            <Hero />
            <AboutSection />
            <ServicesCards />
            <Timeline />
            <QualityAssurance />
            <BrandPage />
        </div>
    )
}

export default Main
