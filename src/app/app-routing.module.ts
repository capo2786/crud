import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilesGeneralesComponent } from './pages/perfiles-generales/perfiles-generales.component';
import { PerfilesIdComponent } from './pages/perfiles-id/perfiles-id.component';
import { PerfilesComponent } from './pages/perfiles/perfiles.component';

const routes: Routes = [

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'perfiles', component: PerfilesComponent},
  { path: 'perfilesGenerales', component: PerfilesGeneralesComponent},
  { path: 'IdPerfil', component: PerfilesComponent},
  { path: 'IdPerfil/:id', component: PerfilesIdComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
