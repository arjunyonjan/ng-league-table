import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  mode = "new"
  
  errors = false;
  errorMessage;

  teams = []

  result:any = {}

  constructor(
    private storageService: StorageService, 
    private router: Router) {

    this.teams = storageService.teams
  }

  ngOnInit(): void {

  }

  onSubmit(resultForm) {

    if(resultForm.form.valid){
       if(this.result.team1 == this.result.team2){

          this.errors = true;
          this.errorMessage = "Both teams can not be same";
          return;
        }else{
          this.errors = false;
          this.errorMessage = ""
        }
      this.storageService.add(this.result)
      this.router.navigate([''])
    }
  }
}
