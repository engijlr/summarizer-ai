import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/engijlr/summarizer-ai");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Streamline Your Reading Experience with <br className="max-md:hidden" />
        <span className="orange_gradient">
          Summify: The AI-Powered Article Summarizer
        </span>
      </h1>
      <h2 className="desc">
        Discover the future of efficient information consumption with our
        AI-powered article summarization app. Say goodbye to long reading
        sessions and hello to instant insights. Save time and stay informed
        effortlessly with our user-friendly interface and intelligent
        summarization technology.
      </h2>
    </header>
  );
};

export default Hero;
