import Shell from './Shell';
import { contact } from './content';
import portrait from './img/portrait.jpg';

export default function AboutPage() {
  return (
    <Shell>
      <div className="v2-about">
        <div className="v2-about-text">
          <h1>About</h1>
          <p className="v2-about-lede">
            I’m a senior software engineer with <strong>a background in geology and fieldwork.</strong>
          </p>
          <p>
            Before software, I earned a B.Sc. in geology with a focus on geophysics, then worked in the
            field as a hydrographic survey technician with NOAA and as a geotechnical field inspector.
            My science career took me from Bermuda to the Arctic.
          </p>
          <p>
            Today I work on frontend platforms at FloQast: micro-frontend architecture, shared
            application templates, and the tooling and delivery systems product teams build on. I bring
            the same curiosity to how I build software and work with teams.
          </p>
          <h2 className="v2-visually-hidden">Contact</h2>
          <ul className="v2-contact">
            <li>
              <a href={`mailto:${contact.email}`}>Get in touch</a>
            </li>
            <li>
              <a href={contact.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={contact.github}>GitHub</a>
            </li>
          </ul>
        </div>
        <figure className="v2-portrait">
          <img src={portrait} alt="Kevin Parine smiling in a forest, wearing a teal rain jacket" width={720} height={1065} />
          <figcaption>Photo by Paris Gore (@parisgore)</figcaption>
        </figure>
      </div>
    </Shell>
  );
}
