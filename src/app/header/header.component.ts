import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Response} from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private _dataservice: DataStorageService, private _authservice: AuthService){ }
  ngOnInit() {
  }

  onSaveData() {
    this._dataservice.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this._dataservice.getRecipe();
  }

  onLogout(){
    this._authservice.logout();
  }
}
