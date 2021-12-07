import RowType from "@/components/table/models/row-type";

export default interface ServerType {
  id: number,
  name: string,
  conteiners: RowType[]
}