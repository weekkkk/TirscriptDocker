export default class DialogBL {
  show: boolean;
  constructor(show: boolean) {
    this.show = show;
  }
  hideDialog() {
    this.show = false;
  }
  showDialog() {
    this.show = true;
  }
}