import { Component,OnInit } from '@angular/core';
import{LoginService} from '../service/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {
constructor(private dataService: LoginService,private router:Router) { }

ngOnInit() {

}
username:any;
password:any;
user:any;

get_data() {
if(this.username == 'icici'|| this.username == 'kotak'  || this.username == 'hdfc')
{
  this.dataService.getUsers1().subscribe((data: any) => this.user = data);
 sessionStorage.setItem("username", this.username);
 sessionStorage.setItem("password", this.password);

  this.router.navigate([`/linkPage`]);
  }
}

}
