import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface HistoryItem {
  filename: string;
  spnum: number;
  stdate: string;
  enddate: string;
  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: HistoryItem[] = [
  {spnum: 1, filename: 'Hydrogen', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 2, filename: 'Helium', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 3, filename: 'Lithium', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 4, filename: 'Beryllium', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 5, filename: 'Boron', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 6, filename: 'Carbon', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 7, filename: 'Nitrogen', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 8, filename: 'Oxygen', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 9, filename: 'Fluorine', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 10, filename: 'Neon', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 11, filename: 'Sodium', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 12, filename: 'Magnesium', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 13, filename: 'Aluminum', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 14, filename: 'Silicon', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 15, filename: 'Phosphorus', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 16, filename: 'Sulfur', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 17, filename: 'Chlorine', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 18, filename: 'Argon', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 19, filename: 'Potassium', stdate: '1/1/63', enddate: '10/1/63'},
  {spnum: 20, filename: 'Calcium', stdate: '1/1/63', enddate: '10/1/63'},
];

/**
 * Data source for the History view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class HistoryDataSource extends DataSource<HistoryItem> {
  data: HistoryItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<HistoryItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: HistoryItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: HistoryItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'filename': return compare(a.filename, b.filename, isAsc);
        case 'spnum': return compare(+a.spnum, +b.spnum, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
