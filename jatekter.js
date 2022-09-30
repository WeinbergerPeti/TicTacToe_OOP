import Mezo from "./mezo.js";
class Jatekter {
    #mezoElemTomb=[];
    constructor() {

        let szuloElem = $("article");
        console.log(szuloElem);
        for (let index = 0; index < 9; index++) {
            const elem = new Mezo(true, szuloElem);
            console.log(elem);
            this.#mezoElemTomb.push(elem);
        }
        console.log(this.#mezoElemTomb);
    }

    kattintas() {
        if (this.#allapot) {
            db++;
            console.log(db);
            if (db % 2 === 0) {
                console.log("X");
                this.kiir("X");
            }
            else if (db % 2 === 1) {
                console.log("O");
                this.kiir("O");
            }
        }
    }
}

export default Jatekter;