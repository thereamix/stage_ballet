import { useNavigate } from "react-router";
import IconDeinApplaus from "./headings/DeinTraumDeinWegDeinApplaus.svg?react"
import "./HomePage.css"
import KurseSection from "./KurseSection.tsx";

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <div className="home">
                <div className="home__bg" />
                <div className="home__content">
                    <IconDeinApplaus/>
                    <button
                        className="home__btn"
                        onClick={() => navigate("/kurse")}
                    >
                        Mitglied werden
                    </button>
                </div>
            </div>
            <KurseSection />
        </>
    );
}

export default HomePage;