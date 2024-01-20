export const randomIndex = (phrases) => {
    const index = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[index];

    return phrase;
};
