export default class PaginationBL {
  sizePage: number;
  currentPage: number;
  countPages: number;

  constructor(sizePage: number, currentPage: number) {
    this.sizePage = sizePage;
    this.currentPage = currentPage;
  }

  shortTable(rows) {
    return rows.slice((this.currentPage - 1) * this.sizePage, (this.currentPage - 1) * this.sizePage + this.sizePage); //Возвращает образы, которые должны находиться на данной странице
  }
  countPagesFunc(rows) {
    this.countPages = Math.floor((rows.length - 1) / this.sizePage + 1); //Подсчитывает кол-во страниц
    return this.countPages;
  }
}