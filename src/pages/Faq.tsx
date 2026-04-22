const faqs = [
    {
        question: 'Brauche ich Vorkenntnisse für die Kurse?',
        answer:
            'Nein, absolut nicht! Wir bieten Kurse für alle Erfahrungsstufen an — vom absoluten Anfänger bis zur fortgeschrittenen Tänzerin. Schreib uns einfach, welchen Kurs du dir vorstellst, und wir helfen dir beim Einstieg.',
    },
    {
        question: 'Ab welchem Alter können Kinder beginnen?',
        answer:
            'Unsere Kinderkurse beginnen bereits ab 6 Jahren. In kleinen Gruppen lernen die Kleinsten spielerisch die Grundlagen des Balletts und entwickeln gleichzeitig Koordination, Rhythmusgefühl und Freude an der Bewegung.',
    },
    {
        question: 'Was soll ich zum Training mitbringen?',
        answer:
            'Für die erste Probestunde reicht bequeme Sportkleidung und Turnschuhe. Wer regelmäßig kommt, braucht Ballettschuhe (Leder oder Canvas), ein Trikot und eine Ballettleggins oder -hose. Alles Weitere besprechen wir gemeinsam.',
    },
    {
        question: 'Wie viel kosten die Kurse?',
        answer:
            'Unsere Kurspreise variieren je nach Kursart und Dauer. Eine detaillierte Übersicht findest du in unserer Preisliste. Schreib uns einfach für ein individuelles Angebot — wir finden gemeinsam das Richtige für dich.',
    },
    {
        question: 'Gibt es ein Probetraining?',
        answer:
            'Ja! Wir laden dich herzlich ein, eine erste Stunde kostenlos und unverbindlich auszuprobieren. So kannst du sehen, ob der Kurs und die Atmosphäre zu dir passen — ganz ohne Druck.',
    },
    {
        question: 'Wo findet das Training statt?',
        answer:
            'Unser Studio befindet sich zentral in Wien. Die genaue Adresse und Anfahrtsbeschreibung erhältst du nach deiner Anmeldung. Alle Räume sind mit professionellen Spiegeln und Ballettstangen ausgestattet.',
    },
    {
        question: 'Gibt es Aufführungen oder Vorstellungen?',
        answer:
            'Ja! Einmal im Jahr findet unsere große Jahresaufführung statt, bei der alle unsere Tänzerinnen auf der Bühne glänzen dürfen. Es gibt außerdem kleinere interne Präsentationen für Anfänger und Kinder.',
    },
    {
        question: 'Kann ich den Kurs pausieren oder abbestellen?',
        answer:
            'Ja, wir verstehen, dass das Leben manchmal andere Pläne hat. Kurspausen sind in besonderen Situationen möglich. Bitte kontaktiere uns so früh wie möglich, damit wir gemeinsam eine Lösung finden.',
    },
]

export default function FAQ() {
    return (
        <div className="faq-body">
            <div className="page-hero">
                <h1>FAQ</h1>
            </div>

            {/* ══ Intro ══ */}
            <div className="faq-intro">
                <p className="faq-intro-text">
                    Du hast Fragen? Wir haben Antworten. Wenn du nichts Passendes
                    findest, schreib uns einfach — wir antworten so schnell wie möglich.
                </p>
            </div>

            {/* ══ Statische FAQ Liste ══ */}
            <div className="faq-list">
                {faqs.map((faq, i) => (
                    <div key={i} className="faq-item">
                        <h3 className="faq-question">
                            {faq.question}
                        </h3>
                        <div className="faq-answer">
                            <p className="faq-answer-text">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}