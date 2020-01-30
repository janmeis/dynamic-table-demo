import { registerLocaleData } from '@angular/common';
import cs from '@angular/common/locales/cs';
import { NgModule } from '@angular/core';
import { cs_CZ, NZ_I18N } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(cs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: cs_CZ }],
  bootstrap: [AppComponent]
})
export class AppModule { }
