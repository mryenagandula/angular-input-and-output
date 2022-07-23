import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public usersDetails:any;

  @Input() public set selectedUser(value){
    if(value){
      this.loadUsersById(value);
    }
  }

  constructor(private api: UsersService) { }

  public ngOnInit(): void {
    
  }

  public async loadUsersById(value){
    const res = await this.api.loadUsersById(value).toPromise().then((res:any) => res.user);
    this.usersDetails = res;
  }

}
