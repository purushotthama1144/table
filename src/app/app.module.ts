import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableTreeComponent } from './table-tree/table-tree.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import { ChartComponent } from './chart/chart.component';
import { ChecklistDatabase, TreeComponent } from './tree/tree.component';
import { NgGanttEditorModule } from 'ng-gantt';

@NgModule({
  declarations: [
    AppComponent,
    TableTreeComponent,
    ChartComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    MatTreeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    NgGanttEditorModule
  ],
  providers: [ChecklistDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
