import style from "../assets/styles.module.css";
export const RandomPhrase = ({ quote }) => {
    const { phrase, author } = quote;
    return (
        <>
            <div className={style.card__quote}>
                <p className={style.quote__phrase}>{phrase}</p>

                <p className={style.quote__author}></p>
            </div>
        </>
    );
};
