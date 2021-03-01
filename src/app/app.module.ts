import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule, MatPaginatorModule, MatSlideToggleModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrolleeTableComponent } from './enrollee-table/enrollee-table.component';


@NgModule({
  declarations: [
    AppComponent,
    EnrolleeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    HttpClientModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
