import { useState } from "react";
import style from "./assets/styles.module.css";
import rectangle from "./assets/img/rectangle1.svg";
import { randomImage } from "./services/randomimage";
import { randomIndex } from "./services/randomindex";
import phrases from "./utils/phrases.json";
import { RandomPhrase } from "./components/RandomPhrase";
import { ButtonChanges } from "./components/ButtonChanges";

console.log(phrases);
function App() {
    const phrase = randomIndex(phrases);

    const fondoDefault = randomImage();

    const [quote, setQuote] = useState(phrase);
    const [fondo, setFondo] = useState(fondoDefault);
    return (
        <>
            <div className={style.container}>
                <img src={fondo} alt="fondo" className={style.background} />
                <div className={style.main}>
                    <h1 className={style.title}>
                        GALLETAS DE LA <span>FORTUNA</span>
                    </h1>
                    <div className={style.main__card}>
                        <img src={rectangle} alt="rectangle" className={style.card__rectangle} />
                        <RandomPhrase quote={quote} />
                    </div>
                    <ButtonChanges phrases={phrases} setQuote={setQuote} setFondo={setFondo} />
                </div>
            </div>
        </>
    );
}

export default App;
