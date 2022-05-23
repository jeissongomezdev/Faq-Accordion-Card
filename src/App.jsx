import { useState } from "react";
import { questions } from "./data/questions";
import SingleQuestion from "./components/SingleQuestion";
import mobile from "../images/illustration-woman-online-mobile.svg";
import desktop from "../images/illustration-woman-online-desktop.svg";
import shamobile from "../images/bg-pattern-mobile.svg";
import shadesktop from "../images/bg-pattern-desktop.svg";
import box from "../images/illustration-box-desktop.svg";
import "./App.scss";

function App() {
  const [quests] = useState(questions);

  return (
    <div className="container">
      <div className="faq">
        <picture className="faq__illustration">
          <source media="(max-width: 1109px)" srcSet={mobile} />
          <source media="(min-width: 1110px)" srcSet={desktop} />
          <img
            src="/images/illustration-woman-online-desktop.svg"
            alt="illustration of a woman standing in front of a screen"
          />
        </picture>
        <picture className="faq__shadow">
          <source media="(max-width: 1109px)" srcSet={shamobile} />
          <source media="(min-width: 1110px)" srcSet={shadesktop} />
          <img src="/images/bg-pattern-desktop.svg" alt="" />
        </picture>
        <img src={box} alt="" className="faq__box" />
      </div>
      <article>
        <h1 className="faq__heading">FAQ</h1>
        {quests.map((quest, index) => (
          <SingleQuestion
            key={index}
            question={quest.question}
            answer={quest.answer}
          />
        ))}
      </article>
    </div>
  );
}

export default App;
