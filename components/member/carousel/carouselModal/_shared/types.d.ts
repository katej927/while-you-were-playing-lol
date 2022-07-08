export interface IResult {
  itemList: (number | undefined)[];
  [prop: string]: string | (number | undefined)[];
}
