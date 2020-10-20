import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface UploadHistorysItem {
  sprint: number;
  start: string;
  end: string;
  filename: string;
  status: string;
  
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: UploadHistorysItem[] = [
  {sprint: 1, start: '11/10/63',end:'24/10/63',filename:'Task Detail-License-Sprint1-คนึง.xlsx',status:'delete_forever'},
  {sprint: 2, start: '25/10/63',end:'08/11/63',filename:'Task Detail-License-Sprint2-คนึง.xlsx',status:'delete_forever'},
  {sprint: 3, start: '09/11/63',end:'22/11/63',filename:'Task Detail-License-Sprint3-คนึง.xlsx',status:'delete_forever'},
  {sprint: 4, start: '23/11/63',end:'11/12/63',filename:'Task Detail-License-Sprint4-คนึง.xlsx',status:'delete_forever'},
  {sprint: 5, start: '12/12/63',end:'26/12/63',filename:'Task Detail-License-Sprint5-คนึง.xlsx',status:'delete_forever'},
];

/**
 * Data source for the UploadHistorys view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class UploadHistorysDataSource extends DataSource<UploadHistorysItem> {
  data: UploadHistorysItem[] = EXAMPLE_DATA;
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
  connect(): Observable<UploadHistorysItem[]> {
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
  private getPagedData(data: UploadHistorysItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: UploadHistorysItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'start': return compare(a.start, b.start, isAsc);
        case 'sprint': return compare(+a.sprint, +b.sprint, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
