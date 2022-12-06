class KonyvAruhazModell{
    #konyvek = []

    constructor(konyvek){
        this.#konyvek = konyvek
    }

    getKonyvek(){
        return this.#konyvek
    }

    setKonyvek(adat){
        let azonosElem = this.#konyvek.findIndex((elem) => {
            return elem.id === adat.id
        })

        if(azonosElem >= 0){
            this.#konyvek[azonosElem].db++
        }else{
            this.#konyvek.push(adat)
            this.#konyvek[this.#konyvek.length - 1].db = 1
        }
    }

    adatTorol(id){

    }

}

export default KonyvAruhazModell