import { Link } from 'react-router';
import Shell from './Shell';
import { caseStudies, type CaseStudy } from './content';
import { V2_HOME } from './paths';

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];
  return (
    <Shell>
      <img className="v2-case-art" src={study.art} alt="" width={900} height={700} />
      <article className="v2-page">
        <p className="v2-eyebrow">{study.context}</p>
        <h1 className="v2-page-title">{study.title}</h1>
        <p className="v2-lede">{study.summary}</p>
        <p className="v2-byline">{study.role}</p>
        {study.sections.map((section) => (
          <section className="v2-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet.text}>
                    {bullet.lead && <strong>{bullet.lead} </strong>}
                    {bullet.text}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <nav className="v2-pager" aria-label="Case studies">
          <Link to={V2_HOME}>← All work</Link>
          {next && next !== study && <Link to={`/work/${next.slug}`}>Next: {next.title} →</Link>}
        </nav>
      </article>
    </Shell>
  );
}
