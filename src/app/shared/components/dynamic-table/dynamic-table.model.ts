export interface IDynamicTableModel {
  header: IDynamicHeader;
  metadata: IDynamicMetadata;
  rows: IDynamicRow[];
}
export interface IDynamicHeader {
  captions: string[];
}
// tslint:disable-next-line: no-empty-interface
export interface IMetadataItem {
}
export interface IDynamicMetadata {
  items: IMetadataItem[];
}
export interface IDynamicRow {
  cells: { name: string; value: any}[];
}
