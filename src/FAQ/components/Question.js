import "./Question.css";
import { useState } from "react";

const Question = ({ title, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <section>
        <h2 className="title">{title}</h2>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? "Zavřít" : "Odpověď"}
        </button>
      </section>
      {show && <p>{text}</p>}
    </div>
  );
};
// !show = vždy to zneguje show = setShow v kliknutí zneguje show -> přepínání true a false
// && = pokud show je false -> nevracej nic x pokud show je true -> vrať text

export default Question;
