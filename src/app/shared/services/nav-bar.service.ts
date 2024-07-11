import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor() { }

  public navBarIsActive: boolean = false;
  public opacity: boolean = false;


}
