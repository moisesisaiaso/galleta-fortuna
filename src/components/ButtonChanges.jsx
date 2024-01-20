import style from "../assets/styles.module.css";
import { randomImage } from "../services/randomimage";
import { randomIndex } from "../services/randomindex";

export const ButtonChanges = ({ phrases, setQuote, setFondo }) => {
    const handleQuote = () => {
        const phrase = randomIndex(phrases);
        setQuote(phrase);

        const fondo = randomImage();
        setFondo(fondo);
    };
    return (
        <>
            <button className={style.main__btn} onClick={handleQuote}>
                Ver otro
            </button>
        </>
    );
};
