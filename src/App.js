import AllMonths from "./data";
import categories from "./categories";
import { useState } from "react";
import FAQ from "./FAQ/FAQ";

const App = () => {
  const [season, setSeason] = useState("zima");

  const finalMonths = AllMonths.filter((oneMonth) => {
    return oneMonth["category"] === season; // do proměnné finalMonths uloží měsíce, které mají kategorii rovnu výchozímu stavu - season
  });

  return (
    <div>
      <div className="all-buttons">
        {categories.map((oneCategory, index) => {
          // vypíšu kategorie přes map
          return (
            <button
              className="one-button"
              key={index}
              onClick={() => setSeason(oneCategory)}
            >
              {oneCategory}
            </button>
          ); // jednotlivé období vepíšu na stránku jako tlačítka
        })}
      </div>
      <div className="all-months">
        {
          finalMonths.map((oneMonth) => {
            // vypíšu měsíce přes map - z finalM. se postupně ukládají do oneM.
            const { id, image, title, holiday, pranostics, description } =
              oneMonth; // a pak objekt destrukturuju

            return (
              <div key={id} className="one-month">
                <img src={image} alt="" />
                <h2>{title}</h2>
                <p className="holiday">{holiday}</p>
                <p className="pranostic">{pranostics}</p>
                <p className="description">{description}</p>
              </div>
            );
          }) // v returnu určím co a jak se má vypsat
        }
      </div>
      <FAQ />
    </div>
  );
};

export default App;
