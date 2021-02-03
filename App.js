import "./App.css";
import FontAwesomeIcon from "./Components/FontAwesomeIcon";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1 className="heading">Shaik Saqlain</h1>
          <h3 className="bio">
            A Passionate Full Stack Developer | Flutter Enthusiast | Web
            Developer.
          </h3>
          <div>
            <FontAwesomeIcon
              link="https://www.linkedin.com/in/saqlain-shaik-74a568199/"
              icon="fa fa-linkedin"
            />
            <FontAwesomeIcon
              link="https://github.com/shaiksaqlain"
              icon="fa fa-github"
            />
            <FontAwesomeIcon
              link="https://www.facebook.com/profile.php?id=100007965286285"
              icon="fa fa-facebook"
            />
            <FontAwesomeIcon
              link="https://twitter.com/SiriussLucifer"
              icon="fa fa-twitter"
            />
            <FontAwesomeIcon
              link="https://www.youtube.com/channel/UCn0l24CqMwzHHnj1TsZtUPQ"
              icon="fa fa-youtube"
            />
            <FontAwesomeIcon
              link="https://www.instagram.com/siriusslucifer/"
              icon="fa fa-instagram"
            />
            <FontAwesomeIcon
              link="https://drive.google.com/drive/u/0/folders/12tO_1QDu07hAHyIWLAy8nY37R74WhbZQ/"
              icon="fa fa-file"
            />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
