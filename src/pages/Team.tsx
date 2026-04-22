// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import UnserTeam from './headings/DasTeam.svg?react'

const members = [
    {
        role: 'CEO',
        name: 'Tatjana Hajdinjak',
        bio: 'Mit nur 20 Jahren steht Tatjana Hajdinjak als Gründerin und CEO hinter der Vision von Stage Ballet. Ihre Leidenschaft für den Tanz und ihr klares Ziel, die Lücke zwischen Training und Bühne zu schließen, prägen das Unternehmen maßgeblich.',
        bio2: 'Mit Engagement und einem hohen Qualitätsanspruch schafft sie eine Plattform, die junge Tänzerinnen und Tänzer optimal auf ihre Zukunft vorbereitet.',
        img: './images/tatjana.png',
        dark: false,
    },
    {
        role: 'CTO & CFO',
        name: 'Julian Monschein',
        bio: 'Julian ist ein zentraler Teil unseres Teams und verantwortet die Bereiche IT, Marketing und Finanzen. Mit seinem Verständnis für digitale Prozesse und moderne Kommunikation sorgt er dafür, dass unsere Vision auch nach außen sichtbar wird und wir uns als Marke professionell präsentieren.',
        bio2: null,
        img: './images/julian.png',
        dark: false,
    }
]

export default function Team() {
    return (
        <div className="team-body">
            <div className="team-heading">
                <UnserTeam width={200} height={"auto"}/>
            </div>

            {/* ══ Intro ══ */}
            <div className="team-intro-section">
                <p className="team-intro-text">
                    Als Gründerin von Stage Ballet ist es mir besonders wichtig, ein Team aufzubauen, das nicht nur fachlich überzeugt, sondern auch unsere Vision lebt: Tänzerinnen und Tänzer bestmöglich auf die Bühne vorzubereiten.
                </p>
                <p className="team-intro-text">
                    Wir arbeiten mit klaren Werten, einem hohen Qualitätsanspruch und dem Ziel, Ausbildung neu zu denken – praxisnah, professionell und inspirierend.
                </p>
            </div>

            {/* ══ Members ══ */}
            <div className="team-members">
                {members.map((m, i) => (
                    <div className="member-card" key={i}>
                        <div className="member-photo-wrap">
                            <img
                                src={m.img}
                                alt={m.name}
                                className="member-photo"
                                loading="lazy"
                            />
                        </div>
                        <div className={`member-info${m.dark ? ' dark' : ''}`}>
                            <h2 className="member-name">{m.role}</h2>
                            <h2 className="member-name">{m.name}</h2>
                            <p className="member-bio">{m.bio}</p>
                            <p className="member-bio">{m.bio2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}