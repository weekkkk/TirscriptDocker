import ImageType from "@/components/table/models/image-type";
import RepositoryType from "./repository-type";

export default class ImageTableBl {
  rows: ImageType[] = [];
  constructor(rows: ImageType[]) {
    this.rows = rows;
  }
  showAddRepositoryForm(rowId: number) {
    this.rows.forEach(r => (r.id == rowId) ? r.addRepositoryFormVisible = true : {});
  }
  hideAddRepositoryForm(rowId: number) {
    this.rows.forEach(r => (r.id == rowId) ? r.addRepositoryFormVisible = false : {});
  }
  addRow(row: ImageType) {
    row.id = Date.now();
    this.rows.push(row);
    
  }
  addRepository(imageId: number, repository: RepositoryType) {
    repository.id = Date.now();
    repository.status = true;
    this.rows.forEach(i => (i.id == imageId) ? i.content.push(repository) : {});
  }
  removeRepository(imageId: number, repositoryId: number) {
    this.rows.forEach(i => (i.id == imageId) ? i.content = i.content.filter((r) => r.id != repositoryId) : {});
  }
  removeRow(rowId: number) {
    this.rows = this.rows.filter((r) => r.id != rowId);
  }
}