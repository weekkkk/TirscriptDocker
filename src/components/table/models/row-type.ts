import RowContentItemType from "@/components/table/models/row-content-item-type";

export default interface RowType {
  id: number,
  name: string,
  content: RowContentItemType[],
  addRepositoryFormVisible: boolean
}