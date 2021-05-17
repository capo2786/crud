import { Component, EventEmitter, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfiles.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-perfiles-generales',
  templateUrl: './perfiles-generales.component.html',
  styleUrls: ['./perfiles-generales.component.css'],
})
export class PerfilesGeneralesComponent implements OnInit {
  perfiles: Perfil[];

  constructor(private _crudServices: CrudService) {


  }

  ngOnInit(): void {
    this.perfilesGenerales();
  }
/**
      @description Bring all registered profiles
     **/
  perfilesGenerales() {
    this._crudServices.getPerfiles().subscribe((resp) => {
      this.perfiles = resp;
      
      console.log(this.perfiles)
    });

  }



}
