import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { navbarData } from './nav-data';
import { style } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../components/login/login.component';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  navData = navbarData;
  showFiller = false;
  isLoggedIn = false;
  private roles: string[] = [];
  showAdmin = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private tokenStorageService: TokenStorageService) {}
  
    ngOnInit(): void {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
  
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;  
        this.showAdmin = this.roles.includes('ROLE_ADMIN');
      }
    }

    logout(): void {
      this.tokenStorageService.signOut();
      window.location.reload();
    }
    
  loginB() {
    this.dialog.open(LoginComponent,{
      panelClass: "dialog-responsive"
    })
  }
}
