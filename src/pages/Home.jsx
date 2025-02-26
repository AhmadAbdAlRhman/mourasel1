import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Features from "../components/Features";
import TopArea from "../components/TopArea";
import FAQ from "../components/FAQ";
import Integration from "../components/Integration";
import Pricing from "../components/Pricing";
import Feedback from "../components/Feedback";
import WhyChoose from "../components/WhyChoose";

const Home = () => {
    // Simulating `$features_area` variable
    const featuresArea = "active";
    const home = { features: { title: "Awesome Features" } }; // Simulating `$home->features->title`

    return (
        <MainLayout>
            <Hero />

            {featuresArea === "active" && (
                <div id="feature-area" className="tp-feature__area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-feature__section-box text-center">
                                    <h3 className="tp-section-title">{home.features.title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Features limit={6} />
                        </div>
                    </div>
                </div>
            )}

            <TopArea />
            <FAQ />
            <Integration />
            <Pricing />
            <Feedback />
            <WhyChoose />
            <FAQ />
        </MainLayout>
    );
};

export default Home;
