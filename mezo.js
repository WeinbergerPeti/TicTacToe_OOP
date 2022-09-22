let db=0;

class Mezo
{
    #index
    #allapot
    constructor(allapot, elem)
    {
        // this.#index=index;
        this.#allapot=allapot;

        elem.append(`<div class="mezo"><p class="elem"></p></div>`);

        this.mezoElem=elem.children("div:last-child");
        console.log(this.mezoElem);

        // var db=0;
        this.mezoElem.on("click", ()=>
        {
            this.kattintas();
            this.setAllapot();
        });
    }

    setAllapot()
    {
        this.#allapot= false;
    }

    kattintas()
    {
        if (this.#allapot)
        {
            db++;
            console.log(db);
            if(db%2===0)
            {
                console.log("X");
                this.kiir("X");
            }
            else if(db%2===1)
            {
                console.log("O");
                this.kiir("O");
            }
        }
    }

    kiir(betu)
    {
        this.mezoElem.text(betu);
    }


}

export default Mezo
