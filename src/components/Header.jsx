import logo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}

export default Header;
