import { Link } from 'react-router';
import Shell from './Shell';
import { earlierExperience, education, experience, findCaseStudy, resumePdf, skills } from './content';

export default function ResumePage() {
  return (
    <Shell>
      <div className="v2-page">
        <div className="v2-resume-head">
          <h1>Résumé</h1>
          <a className="v2-button" href={resumePdf} target="_blank" rel="noopener noreferrer">
            Download PDF<span className="v2-visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="v2-resume-summary">
          Senior software engineer focused on frontend platforms, micro-frontend architecture, and developer
          tooling.
        </p>

        <section className="v2-section v2-resume-section" aria-labelledby="experience">
          <h2 id="experience">Experience</h2>
          {experience.map((role) => (
            <div className="v2-role" key={`${role.org}-${role.dates}`}>
              <h3>
                {role.title} · {role.org}
              </h3>
              <p className="v2-role-meta">
                {role.where} · {role.dates}
              </p>
              <ul>
                {role.bullets.map((bullet) => {
                  const study = findCaseStudy(bullet.caseStudy);
                  return (
                    <li key={bullet.text}>
                      {bullet.text}
                      {study && (
                        <>
                          {' '}
                          <Link className="v2-role-link" to={`/work/${study.slug}`}>
                            Case study<span className="v2-visually-hidden">: {study.title}</span> →
                          </Link>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
          {earlierExperience.map((role) => (
            <div className="v2-role" key={role.org}>
              <h3>
                {role.title} · {role.org}
              </h3>
              <p className="v2-role-meta">{role.dates}</p>
            </div>
          ))}
        </section>

        <section className="v2-section v2-resume-section" aria-labelledby="education">
          <h2 id="education">Education</h2>
          {education.map((item) => (
            <div className="v2-role" key={item.org}>
              <h3>{item.title}</h3>
              <p className="v2-role-meta">
                {item.org} · {item.dates}
              </p>
            </div>
          ))}
        </section>

        <section className="v2-section v2-resume-section" aria-labelledby="skills">
          <h2 id="skills">Skills</h2>
          <p>{skills}</p>
        </section>
      </div>
    </Shell>
  );
}
