import { EnrolleeDetail } from './enrollee-table.model';
import { EnrolleeTableService } from './enrollee-table.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-enrollee-table',
  templateUrl: './enrollee-table.component.html',
  styleUrls: ['./enrollee-table.component.css']
})
export class EnrolleeTableComponent implements OnInit {

  tableDetails: EnrolleeDetail[] = [];
  showTable: boolean = false;
  displayedColumns: string[] = ['id', 'name', 'active', 'dateOfBirth'];
  private updateNameSubj: Subject<EnrolleeDetail> = new Subject();
  subscription: Subscription;

  constructor(private service: EnrolleeTableService, private datePipe: DatePipe,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getEnrollees();
    this.subscription = this.updateNameSubj.pipe(debounceTime(250)).subscribe(value => {
      this.updateDetails(value);
    });
  }

  /**Get the list of Enorllees details */
  getEnrollees() {
    this.service.getEnrollees().subscribe((res: EnrolleeDetail[]) => {
      this.tableDetails = res;
      this.showTable = true;
    })
  }

  /**Name input element 'Enter' key event handler */
  nameInputEnterEvent(value) {
    this.updateNameSubj.next(value);
  }

  /**Update the enrollee details */
  updateDetails(value: EnrolleeDetail) {
    this.service.updateEnrolleeDetail(value).subscribe((res) => {
      this.snackBar.open("Updated successfully", "", { duration: 2000, });
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
