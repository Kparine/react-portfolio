import echoImg from '../img/echo.png';
import echo2Img from '../img/echo2.png';
import githubImg from '../img/github.png';
import teachersPetImg from '../img/teachersPet.png';

export default function Projects() {
  return (
    <div id="Projects">
      <div className="container">
        <div className="row" id="projectTitleContain">
          <h1 id="ProjectTitle">P r o j e c t s . </h1>
        </div>

        <div className="row" id="echoRow">
          <div className="col-sm-12 col-md-6">
            <div className="row">
              <h4 id="echoTitle">
                E C H O
                <a href="https://github.com/Kparine/echo">
                  <img
                    src={githubImg}
                    alt="ECHO on GitHub"
                    className="logo"
                  />
                </a>
              </h4>
            </div>
            <p>
              A React Native mobile application built for the adventurer to more
              safely travel alone. Echo enables the user to create a network of
              friends that are notified of their trip details, via SMS message,
              and when/ if they have returned safely. Project is ongoing with an
              expected early summer iStore publishing date
            </p>
            <p>
              JavaScript, React Native, Redux, Expo, GCP Firestore, Google Maps
              API, CSS
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <div id="echoImgContain">
              <a href="https://github.com/Kparine/echo">
                <img
                  id="echo1"
                  src={echoImg}
                  alt="ECHO sign-in screen"
                  className="logo"
                />
              </a>
              <a href="https://github.com/Kparine/echo">
                <img
                  id="echo2"
                  src={echo2Img}
                  alt="ECHO home screen with Profile and Create Trip"
                  className="logo"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="row" id="petContain">
          <div className="col">
            <img
              id="petImg"
              src={teachersPetImg}
              alt="Teacher's Pet gradebook on a laptop"
              className="logo"
            />
          </div>
          <div className="col">
            <div className="row" id="petTitle">
              <h4>
                Teacher's Pet
                <a href="https://github.com/TeachersPet">
                  <img
                    id="teacherGit"
                    src={githubImg}
                    alt="Teacher's Pet on GitHub"
                    className="logo"
                  />
                </a>
              </h4>
            </div>
            <p>
              A React web application designed to help elementary school
              teachers grade and organize assignments. Collaborated in a scrum
              adhering to agile methodologies, utilizing Trello and Git version
              control.
            </p>
            <p>
              JavaScript, React, Redux, Node.js, Express, PostgreSQL, Knex.js,
              Heroku, HTML/CSS, SASS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
