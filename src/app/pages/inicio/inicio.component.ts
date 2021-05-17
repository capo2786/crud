import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { gitApi } from 'src/app/interfaces/gitApi';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor( private _crudServices: CrudService) { }



  ngOnInit(): void {

  }





}
