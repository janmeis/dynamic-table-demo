import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { IconsProviderModule } from '../icons-provider.module';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';


@NgModule({
  declarations: [
    DynamicTableComponent,
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    DynamicTableComponent,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class SharedModule { }
