import Mezo from "./mezo.js";
class Jatekter
{
    
    constructor()
    {

        let mezoElem=$("article");
        for (let index = 0; index < 9; index++) 
        {
            const elem=new Mezo(mezoElem);
            mezoElem.push(elem);
        }
    }
}

export default Jatekter;