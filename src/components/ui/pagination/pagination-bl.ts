export default class PaginationBL {
  sizePage: number;
  curentPage: number;
  countPages: number;

  constructor(sizePage: number, curentPage: number) {
    this.sizePage = sizePage;
    this.curentPage = curentPage;
  }

  shortTable(rows) {
    return rows.slice((this.curentPage - 1) * this.sizePage, (this.curentPage - 1) * this.sizePage + this.sizePage)
  }
  countPagesFunc(rows) {
    this.countPages = Math.floor((rows.length - 1) / this.sizePage + 1);
    return this.countPages;
  }
}