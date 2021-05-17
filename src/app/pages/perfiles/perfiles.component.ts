import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfiles.model';
import { ApiGitService } from 'src/app/services/api-git.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css'],
})
export class PerfilesComponent implements OnInit {

    /**
      @description Variables for us from git services
     **/
  userProfile: any;
  repos: any;
  followers: any;
  following: any;
  username: string = 'capo2786';
  notFound = false;

  perfil = new Perfil();

  constructor
    (
    private service: ApiGitService,
    private _crudServices: CrudService
    ) {}

  ngOnInit(): void {}

    /**
      @description Profile search
     **/

  searchUser() {
    this.service.updateFields(this.username);
    this.service.getPerfil().subscribe(
      (profile) => {
        this.userProfile = profile;
        this.perfil.idGit = profile['id'];
        this.perfil.avatar_url = profile['avatar_url'];
        this.perfil.location = profile['location'];
        this.perfil.login = profile['login'];
        this.perfil.type = profile['type'];


      },
      (error) => {
        this.notFound = !this.notFound;
      }
    );
    // clears input field
    this.username = '';

    this.service.getRepo().subscribe((repos) => {
      this.repos = repos;

    });

    this.service.getFollowers().subscribe((followers) => {
      this.followers = followers;
    });

    this.service.getFollowing().subscribe((following) => {
      this.following = following;
    });
  }
     /**
      @description Save profiles in mongo db
     **/
  guardarPerfil(){
    this._crudServices.addPerfil(this.perfil).subscribe(resp=>{
      Swal.fire("Registro  existoso", "", "success");
      console.log(resp,'RESPUESTA');
    }, (err) => {

      Swal.fire('Error', err.error.msg, 'error');

    })
  }

}
