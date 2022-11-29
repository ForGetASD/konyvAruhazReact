class KosarModell{
    #kosar = []
    #db
    #osszAr
    constructor(kosar){
        this.#kosar = kosar
        this.#db = 0
        this.#osszAr = 0
    }

    getKosar(){
        return this.#kosar
    }
    setKosar(adat){
        let azonosElem = this.#kosar.findIndex((elem) => {
            return elem.id === adat.id
        })

        if(azonosElem >= 0){
            this.#kosar[azonosElem].db++
        }else{
            this.#kosar.push(adat)
            this.#kosar[this.#kosar.length - 1].db = 1
        }
    }

    getDb(){
        return this.#kosar.length
    }
    getOsszAr(){
        for (let i = 0; i < this.#kosar.length; i++) {
            this.#osszAr += this.#kosar[i].ar
        }
        return this.#osszAr
    }
}

export default KosarModell