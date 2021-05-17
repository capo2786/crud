import { CrudService } from './services/crud.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { PerfilesComponent } from './pages/perfiles/perfiles.component';
import { NgProgressModule } from 'ngx-progressbar';
import { PerfilesGeneralesComponent } from './pages/perfiles-generales/perfiles-generales.component';
import { PerfilesIdComponent } from './pages/perfiles-id/perfiles-id.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    PerfilesComponent,
    PerfilesGeneralesComponent,
    PerfilesIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule

  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
