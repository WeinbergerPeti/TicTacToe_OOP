let db = 0;

class Mezo {
    #index
    #allapot
    constructor(allapot, elem) {
        // this.#index=index;
        this.#allapot = allapot;

        elem.append(`<div class="mezo"><p class="elem"></p></div>`);

        this.mezoElem = elem.children("div:last-child");
        // console.log(this.mezoElem);

        // var db=0;
        this.mezoElem.on("click", () => {
            this.kattintas();
            this.jelenlegiJatekos();
            this.setAllapot();
        });
    }

    setAllapot() {
        this.#allapot = false;
    }


    

    kiir(betu) {
        this.mezoElem.text(betu);
    }

    jelenlegiJatekos() {
        if (db % 2 === 0) {
            $("h2").text("O jön");
        }
        else if (db % 2 === 1) {
            $("h2").text("X jön");
        }
    }


}

export default Mezo
