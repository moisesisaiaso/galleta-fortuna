import fondo1 from "../assets/img/fondo1.jpg";
import fondo2 from "../assets/img/fondo2.jpg";
import fondo3 from "../assets/img/fondo3.jpg";
import fondo4 from "../assets/img/fondo4.jpg";

const fondos = [fondo1, fondo2, fondo3, fondo4];

export const randomImage = () => {
    const indice = Math.floor(Math.random() * fondos.length);

    const fondo = fondos[indice];
    return fondo;
};
