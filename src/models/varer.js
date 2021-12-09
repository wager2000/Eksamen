
//vores class for varer. 
class Goods {
    constructor(varer, pris, vareKategori, billede) {
      this.varer = varer;
      this.pris = pris;
      this.vareKategori = vareKategori;
      this.billede = billede;
    }
  }
  //gør så vi kan bruge det i andre filer
  module.exports = Goods;