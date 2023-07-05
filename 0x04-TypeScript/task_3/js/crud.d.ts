import { RowId, RowElement } from './interface';

declare function insertRow(row: any): number;
declare function deleteRow(rowId: any): void;
declare function updateRow(rowId: any, row: any): void;