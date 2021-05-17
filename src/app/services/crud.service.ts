import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from '../models/perfiles.model';



@Injectable({
  providedIn: 'root'
})
export class CrudService {



  constructor(
    private http: HttpClient

  ) { }

  private opcionesUrl =  environment.base_url + '/perfiles';
     /**
      @description Consumption of saved profiles
     **/

  getPerfiles(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.opcionesUrl)
  }

     /**
      @description Consumption of profiles saved by id
     **/
  getPerfil(id: string): Observable<Perfil> {
    const url = `${this.opcionesUrl}/${id}`;
    return this.http.get<Perfil>(url);
  }
     /**
      @description Save git profile
     **/

  addPerfil (perfil: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.opcionesUrl,perfil);
  }

     /**
      @description Delete profile
     **/

  deletePerfil (perfil: Perfil | string): Observable<Perfil> {
    const id = typeof perfil === 'string' ? perfil : perfil._id;
    const url = `${this.opcionesUrl}/${id}`;
    return this.http.delete<Perfil>(url);
  }

     /**
      @description Update profile
     **/

  updatePerfil(perfil: Perfil): Observable<any> {
    return this.http.put(this.opcionesUrl, perfil);
  }



}
