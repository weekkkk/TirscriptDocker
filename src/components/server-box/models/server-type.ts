import RowType from "@/components/table/models/image-type";

export default interface ServerType {
  id: number,
  name: string,
  containers?: RowType[]
}