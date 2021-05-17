import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiGitService {

    /**
      @description Consuming git services
     **/
  private username: string;
  private token = environment.token;
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;
  constructor(private http: HttpClient) { }

     /**
      @description bring the profiles from git
     **/
  getPerfil(){
    return this.http.get(`https://api.github.com/users/${this.username}?${this.clientId}&client_secret=${this.clientSecret}`);
  };
    /**
      @description bring the profile repositories
     **/

  getRepo(){
    return this.http.get(`https://api.github.com/users/${this.username}/repos?${this.clientId}&client_secret=${this.clientSecret}`);
  };
    /**
      @description Bring profile followers
     **/
  getFollowers() {
    return this.http.get(`https://api.github.com/users/${this.username}/followers?${this.clientId}&client_secret=${this.clientSecret}`)
  };
     /**
      @description Who am i following
     **/
  getFollowing() {
    return this.http.get(`https://api.github.com/users/${this.username}/following?${this.clientId}&client_secret=${this.clientSecret}`)
  };

  updateFields(username: string) {
    this.username = username;
  }

}
