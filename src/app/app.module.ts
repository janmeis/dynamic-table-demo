import { registerLocaleData } from '@angular/common';
import cs from '@angular/common/locales/cs';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { cs_CZ, NZ_I18N } from 'ng-zorro-antd';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './shared/authentication.service';
import { SharedModule } from './shared/shared.module';


registerLocaleData(cs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: cs_CZ },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
