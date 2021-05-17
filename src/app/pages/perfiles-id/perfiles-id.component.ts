import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Perfil } from 'src/app/models/perfiles.model';
import { CrudService } from 'src/app/services/crud.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfiles-id',
  templateUrl: './perfiles-id.component.html',
  styleUrls: ['./perfiles-id.component.css'],
})
export class PerfilesIdComponent implements OnInit {
  perfil = new Perfil();

  public notificacion = new EventEmitter<any>();
  constructor(
    private _crudServices: CrudService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


     /**
      @description The data of the specific id is displayed
     **/
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this._crudServices.getPerfil(id).subscribe((resp) => (this.perfil = resp));
  }
     /**
      @description update the profile data
     **/
  actualizarPerfil() {
    this._crudServices.updatePerfil(this.perfil).subscribe((resp) => {
      this.notificacion.emit( resp );
      Swal.fire('Actualización de perfil existoso', '', 'success');
      console.log(resp, 'actualizado');
    });
  }
   /**
      @description Profile is deleted
     **/
  delete(): void {
    this._crudServices.deletePerfil(this.perfil._id).subscribe((result) => {
      console.log(result);
    //  this.notificacion.emit( result );
    });

    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
}
