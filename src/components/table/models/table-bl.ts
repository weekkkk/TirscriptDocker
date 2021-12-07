import RowType from "@/components/table/models/row-type";
import RowContentItemType from "@/components/table/models/row-content-item-type"
import mainStore from "@/plugins/mainStore";

export default class TableBl{
  rows: RowType[] = [];
  constructor(rows: RowType[]) {
    this.rows = rows;
  }
  showAddReposytoryForm(rowId: number) {
    this.rows.forEach(r => (r.id == rowId) ? r.addRepositoryFormVisible = true : r.addRepositoryFormVisible = false);
  }
  hideAddReposytoryForm(rowId: number) {
    this.rows.forEach(r => (r.id == rowId) ? r.addRepositoryFormVisible = false : r.addRepositoryFormVisible = false);
  }
  addRow(row: RowType) {
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
    let row: RowType;
    this.rows.forEach(r => (r.id == obj.rowId) ? row = r : {});
    row.content = row.content.filter((i) => i.id != obj.reposytoryId)
  }
  removeRow(rowId: number) {
    this.rows = this.rows.filter((r) => r.id != rowId);
  }
}