import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';




import { AppComponent } from './app.component';
import { ConfigService } from './config.service';
import { ProductTableComponent } from './product-table/product-table.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    CdkTableModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
