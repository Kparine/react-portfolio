import { Link } from 'react-router';
import Shell from './Shell';
import { caseStudies } from './content';

/** Shows the summary and artwork of whichever project's radio is checked. */
const selectionCss = `@supports selector(:has(*)) {
  .v2-work .v2-summary, .v2-work .v2-art img { display: none; }
${caseStudies
  .map(
    ({ slug }) =>
      `  .v2-work:has(#pick-${slug}:checked) .v2-summary[data-project="${slug}"] { display: flex; }\n` +
      `  .v2-work:has(#pick-${slug}:checked) .v2-art img[data-project="${slug}"] { display: block; }`,
  )
  .join('\n')}
}`;

/**
 * Work (home). Project selection is a radio group styled with CSS (`:has(:checked)`), so it works
 * by keyboard, click and tap with or without JavaScript, and hydrates without state.
 */
export default function WorkPage() {
  return (
    <Shell wide>
      <style>{selectionCss}</style>
      <div className="v2-work">
        <section className="v2-work-text" aria-labelledby="work-title">
          <h1 id="work-title" className="v2-work-title">
            Selected work
          </h1>
          <fieldset className="v2-picker">
            <legend className="v2-visually-hidden">Choose a project</legend>
            {caseStudies.map((study, index) => (
              <div className="v2-option" key={study.slug}>
                <input
                  className="v2-radio"
                  type="radio"
                  name="project"
                  id={`pick-${study.slug}`}
                  value={study.slug}
                  defaultChecked={index === 0}
                />
                <label htmlFor={`pick-${study.slug}`}>
                  <span className="v2-option-bar" aria-hidden="true" />
                  <span className="v2-option-text">
                    <span className="v2-option-title">{study.title}</span>
                    <span className="v2-option-kicker">{study.kicker}</span>
                  </span>
                </label>
              </div>
            ))}
          </fieldset>
          <div className="v2-summaries">
            {caseStudies.map((study) => (
              <div className="v2-summary" data-project={study.slug} key={study.slug}>
                <p>{study.summary}</p>
                <Link className="v2-cta" to={`/work/${study.slug}`}>
                  Read the case study<span className="v2-visually-hidden">: {study.title}</span>{' '}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div className="v2-art">
          {caseStudies.map((study) => (
            <img key={study.slug} src={study.art} alt="" data-project={study.slug} width={900} height={700} />
          ))}
        </div>
      </div>
    </Shell>
  );
}
