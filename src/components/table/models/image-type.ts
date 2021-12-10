import RepositoryType from "@/components/table/models/repository-type";

export default interface RowType {
  id: number,
  name: string,
  content?: RepositoryType[],
  addRepositoryFormVisible?: boolean
  serviceId: number,
}