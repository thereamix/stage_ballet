// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import UeberUns from "./headings/UeberUns.svg?react"

export default function About() {
    return (
        <div className="about-body">
            <div className="ueberuns-container">
                <UeberUns width="200" height="auto" />
            </div>
            {/* ══ Intro ══ */}
            <div className="about-intro">
                <p className="about-text">
                    Meistere die Grundlagen des klassischen Tanzes. In diesem Kurs kombinieren wir anatomische Präzision mit künstlerischem Ausdruck, um Körpergefühl und Eleganz auf ein neues Level zu heben.
                </p>
                <p className={"about-text"}>
                    Meistere die Grundlagen des klassischen Tanzes. In diesem Kurs kombinieren wir anatomische Präzision mit künstlerischem Ausdruck, um Körpergefühl und Eleganz auf ein neues Level zu heben.
                </p>
            </div>
        </div>
    )
}