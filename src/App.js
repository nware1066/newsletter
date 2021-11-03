
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">Stitching Circle</h1>
      </header>
      <main className="newsletter-main">
        <h1 className="main-title">Hello Friends</h1>
        <p className="newsletter-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          maiores nesciunt inventore rem deserunt, vitae architecto sunt cumque
          veniam, sit ea sed praesentium eveniet illum corporis debitis
          doloremque quidem blanditiis?
        </p>
        <p className="newsletter-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit
          sunt voluptate minima ipsa asperiores nobis quos, sit quis. Facere,
          error numquam! Nisi ea cupiditate doloribus omnis. Sit ex ea at fugit
          aliquam debitis nihil fuga molestias dolores, odit quos qui minima
          architecto quas dolorem?
        </p>
        <div className="form">
          <form action="/" method="post">
            <input type="text" name="name" />
            <input type="email" name="email" />
            <button type="submit" name="submit">
              Join Newsletter
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
