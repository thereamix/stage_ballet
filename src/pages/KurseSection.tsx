import UnsereKurse from "./headings/UnsereKurse.svg?react";
import "./KurseSection.css"

const KURSE = [
    {
        id: 1,
        title: "Ballet Technique",
        description:
            "Meistere die Grundlagen des klassischen Tanzes. In diesem Kurs kombinieren wir anatomische Präzision mit künstlerischem Ausdruck, um Körpergefühl und Eleganz auf ein neues Level zu heben.",
        tip: "Für diesen Kurs benötigst du Vorkenntnisse im Ballet!",
        image: "./images/imp.png",
    },
    // add more courses here
];

function KurseSection() {
    return (
        <>
            <section className="kurse-section">
                <div className="kurse-section__heading">
                    <UnsereKurse />
                </div>

                {KURSE.map((kurs) => (
                    <div className="kurs-card" key={kurs.id}>
                        <div className="kurs-card__info">
                            <h2 className="kurs-card__title">{kurs.title}</h2>
                            <p className="kurs-card__desc">{kurs.description}</p>
                            {kurs.tip && (
                                <div className="kurs-card__tip">
                                    <strong>Ein kleiner Tipp:</strong> {kurs.tip}
                                </div>
                            )}
                            <button className="kurs-card__btn" onClick={() => {}}>
                                Mehr anzeigen
                            </button>
                        </div>
                        <div className="kurs-card__image-wrap">
                            <img src={kurs.image} alt={kurs.title} />
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default KurseSection;