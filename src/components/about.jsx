
export default function About() {
  return (
    <div id="aboutStyle">
      <div className="container">
        <p id="skills">
          <strong>
            JavaScript | ES6 | React | React Native | Redux | Expo | Node.js |
            PostgreSQL | NoSQL | GCP Firestore | Knex.js | Ajax | Express |
            GitHub | SASS{' '}
          </strong>
        </p>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h1 id="aboutTitle">A b o u t . </h1>
            <div id="edu">
              <p> Certificate, Web Development || Galvanize || 2019</p>
              <p> B.Sc. Geology || Western Washington University || 2011</p>
            </div>
            <a
              id="btn"
              className="btn btn-outline-secondary btn-lg"
              href="https://drive.google.com/file/d/1jdKGghlL0t8JoxwfYYijd2nw9DHfvYGQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>{' '}
          </div>
          <br />
          <div className="col-sm-12 col-md-6">
            <p id="About">
              Kevin is a tenacious learner, blending his diverse scientific,
              technical, and team-oriented background. His technical and
              scientific skills have taken him around the world from Bermuda to
              the Arctic. He has managed large projects recognized by the
              International Maritime Organization and small municipalities.
              Kevin has shifted his focus from the scientific community to
              software, where he is passionate about developing web and
              mobile-applications with React, React Native and Redux. He is
              highly skilled in CSS preprocessors, such as SASS and enjoys
              creating aesthetic, simple designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
