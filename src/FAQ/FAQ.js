import "./FAQ.css";
import questions from "./FAQ-data";
import Question from "./components/Question";

const FAQ = () => {
  return (
    <div className="all-questions">
      {questions.map((oneQuestion) => {
        return <Question key={oneQuestion.id} {...oneQuestion} />;
      })}
    </div>
  );
};

export default FAQ;
