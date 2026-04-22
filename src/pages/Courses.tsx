import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import UnsereKurse from './headings/UnsereKurse.svg?react'

const courses = [
    {
        badge: 'Ab 16 Jahren',
        title: 'Ballet Technique',
        text: 'Meistere die Grundlagen des klassischen Tanzes. In diesem Kurs lernst du Haltung, Koordination und Eleganz — aufgebaut Schritt für Schritt. Ein idealer Start für alle, die Ballett von Grund auf richtig erlernen möchten.',
        img: './images/Ballet_Technique.jpg',
        meta: [
            { label: 'Level', value: 'Anfänger – Mittelstufe' },
            { label: 'Dauer', value: '75 Min.' },
            { label: 'Einheit', value: '1× pro Woche' },
        ],
        dark: false,
    },
    {
        badge: 'Erwachsene Anfänger',
        title: 'Bereit für dein erstes Plié?',
        text: 'Unser Kurs gibt dir genau die Sicherheit, die du brauchst. Schritt für Schritt, in deinem Tempo, mit unserer liebevollen Begleitung. Keine Vorkenntnisse erforderlich.',
        img: './images/Plie.png',
        meta: [
            { label: 'Level', value: 'Absolute Anfänger' },
            { label: 'Dauer', value: '60 Min.' },
            { label: 'Einheit', value: '1× pro Woche' },
        ],
        dark: false,
    },
    {
        badge: 'Kinder ab 4 Jahren',
        title: 'Für unsere Kleinen',
        text: 'Ein wunderbarer Einstieg in die Welt des Tanzes für die Kleinsten — spielerisch, kreativ und liebevoll begleitet. Die kleinen Tänzer lernen Koordination, Rhythmusgefühl und Freude an der Bewegung.',
        img: './images/KleinenKurs.jpg',
        meta: [
            { label: 'Alter', value: '4–8 Jahre' },
            { label: 'Dauer', value: '45 Min.' },
            { label: 'Einheit', value: '1× pro Woche' },
        ],
        dark: false,
    }
]

export default function Courses() {
    return (
        <div className="courses-page-body">
            {/* ══ Hero ══ */}
            <div className="page-hero">
                <UnsereKurse width={270} height={"auto"}/>
            </div>

            {/* ══ Course List ══ */}
            <div className="courses-list-section">
                {courses.map((c, i) => (
                    <div className="course-full" key={i}>
                        <img
                            src={c.img}
                            alt={c.title}
                            className="course-full-img"
                            loading="lazy"
                        />
                        <div className={`course-full-content${c.dark ? ' dark' : ''}`}>
                            <h2 className="course-full-title">{c.title}</h2>
                            <p className="course-full-text">{c.text}</p>

                            <Link
                                to="/faq"
                                className={`btn ${c.dark ? 'btn-light' : 'btn-dark'}`}
                                style={{ fontSize: '11px', padding: '11px 24px' }}
                            >
                                Mehr Anzeigen
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}