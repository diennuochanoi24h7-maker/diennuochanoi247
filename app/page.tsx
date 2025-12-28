import Banner from "@/components/banner/banner";
import AboutUs from "@/components/about-us/about-us";
import Services from "@/components/services/services";
import Reviews from "@/components/reviews/reviews";
import WorkProcess from "@/components/work-process/work-process";


export default function Home() {
    return (
        <main>
            <Banner/>
            <Services/>
            <AboutUs/>
            <WorkProcess/>
            <Reviews/>
        </main>
    );
}
