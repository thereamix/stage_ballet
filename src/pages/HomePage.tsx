import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DeinTraum from "./headings/DeinTraumDeinWegDeinApplaus.svg?react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import UnsereKurse from "./headings/UnsereKurse.svg?react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import UnserStudio from "./headings/UnserStudio.svg?react"

const BASE = import.meta.env.BASE_URL + "/";

const studioImages = [
    { src: `${BASE}images/Studio1.jpg`, alt: 'studio1' },
    { src: `${BASE}images/Studio2.jpg`, alt: 'studio2' },
    { src: `${BASE}images/Studio3.png`, alt: 'studio3' },
    { src: `${BASE}images/Studio4.png`, alt: 'studio4' },
    { src: `${BASE}images/Studio5.jpg`, alt: 'studio5' },
]

const courses = [
    {
        tag: 'Klassisches Ballett',
        title: 'Ballet Technique',
        text: 'Meistere die Grundlagen des klassischen Tanzes. In diesem Kurs kombinieren wir anatomische Präzision mit künstlerischem Ausdruck, um Körpergefühl und Eleganz auf ein neues Level zu heben.',
        tip: 'Für diesen Kurs benötigst du Vorkenntnisse im Ballet!',
        img: `${BASE}images/Ballet_Technique.jpg`,
        path: '/courses',
    },
    {
        tag: 'Erwachsene Anfänger',
        title: 'Bereit für dein erstes Plié?',
        text: 'Unser Kurs führt dich Schritt für Schritt durch die Welt des klassischen Tanzes – von der präzisen Arbeit an der Stange bis hin zu graziösen Sprüngen im Raum. Verbessere deine Haltung, stärke deine Muskulatur und bringe deinen Körper in Bestform.',
        img: `${BASE}images/Plie.png`,
        path: '/courses',
    },
    {
        tag: 'Kinder ab 4 Jahren',
        title: 'Für unsere Kleinen',
        text: 'In unserem Ballettunterricht für Kinder entdecken die Kleinen spielerisch die Welt des Tanzes. Hier werden aus kleinen Hüpfern graziöse Sprünge!',
        tip: 'Machen Sie eine kostenlose „Probestunde" bei uns, bequem über die Online-Anmeldung.',
        img: `${BASE}images/KleinenKurs.jpg`,
        path: '/courses',
    },
]

export default function HomePage() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeSlide, setActiveSlide] = useState(0)

    const handleScroll = () => {
        if (!scrollRef.current) return
        const el = scrollRef.current
        const idx = Math.round(el.scrollLeft / (el.scrollWidth / studioImages.length))
        setActiveSlide(idx)
    }

    return (
        <>
            {/* ══════════════ HERO ══════════════ */}
            <section className="hero">
                <div
                    className="hero-bg"
                    style={{
                        backgroundImage:
                            `url(${BASE}images/homepage_background.png)`,
                    }}
                />
                <div className="hero-grain" />
                <div className="hero-gradient" />

                <div className="hero-content">
                    <h1 className="hero-headline">
                        <DeinTraum width={350} height={"auto"}/>
                    </h1>
                    <Link to="/courses" className="btn btn-light">
                        MITGLIED WERDEN
                        {
                            <p>
                                {BASE}
                            </p>
                        }
                    </Link>
                </div>
            </section>

            {/* ══════════════ KURSE ══════════════ */}
            <section className="courses-section">
                <div className="courses-section-header">
                    <UnsereKurse width={200} height={"auto"}/>
                </div>

                {courses.map((c, i) => (
                    <div className="course-card" key={i}>
                        <img
                            src={c.img}
                            alt={c.title}
                            className="course-card-img"
                            loading="lazy"
                        />
                        <div className="course-card-overlay">
                            <h3 className="course-card-title">{c.title}</h3>
                            <p className="course-card-text">{c.text}</p>
                            <Link to={c.path} className="btn-light" style={{ fontSize: '11px'}}>
                                Mehr ANZEIGEN
                            </Link>
                        </div>
                    </div>
                ))}
            </section>

            {/* ══════════════ STUDIO ══════════════ */}
            <section className="studio-section">
                <div className="studio-header">
                    <UnserStudio width={200} height={"auto"}/>
                </div>

                <div
                    className="studio-scroll"
                    ref={scrollRef}
                    onScroll={handleScroll}
                >
                    {studioImages.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            className="studio-img"
                            loading="lazy"
                        />
                    ))}
                </div>

                <div className="studio-dots">
                    {studioImages.map((_, i) => (
                        <div key={i} className={`studio-dot${activeSlide === i ? ' active' : ''}`} />
                    ))}
                </div>
            </section>
        </>
    )
}