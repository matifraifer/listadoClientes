import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  canActivate(): Observable<boolean> | boolean  {
    console.log("canactivate")
    return true;
  }

  canLoad(): Observable<boolean> | boolean  {
    console.log("canload")
    return true;
  }
}
