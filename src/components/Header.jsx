import logoImg from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="quiz-logo" />
      <h1>DSA-Quiz</h1>
    </header>
  );
};

export default Header;
