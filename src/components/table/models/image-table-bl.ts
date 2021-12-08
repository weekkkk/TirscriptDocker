import ImageType from "@/components/table/models/image-type";

export default class ImageTableBl{
  rows: ImageType[] = [];
  constructor(rows: ImageType[]) {
    this.rows = rows;
  }
  showAddRepositoryForm(rowId: number) {
    this.rows.forEach(r => (r.id == rowId) ? r.addRepositoryFormVisible = true : r.addRepositoryFormVisible = false);
  }
  hideAddRepositoryForm(rowId: number) {
    this.rows.forEach(r => (r.id == rowId) ? r.addRepositoryFormVisible = false : r.addRepositoryFormVisible = false);
  }
  addRow(row: ImageType) {
    row.id = Date.now();
    this.rows.push(row);
  }
  addRowContentItem(obj) {
    obj.item.id = Date.now();
    obj.item.status = true;
    this.rows.forEach(r => (r.id == obj.rowId) ? r.content.push(obj.item) : {});
  }
  removeRowContentItem(obj) {
    console.log(obj);
    let row: ImageType;
    this.rows.forEach(r => (r.id == obj.rowId) ? row = r : {});
    row.content = row.content.filter((i) => i.id != obj.repositoryId)
  }
  removeRow(rowId: number) {
    this.rows = this.rows.filter((r) => r.id != rowId);
  }
}