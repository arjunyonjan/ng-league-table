import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  teams = [
    {teamName: "Chelsea", teamId: 1},
    {teamName: "Tottenham Hotspur", teamId: 2},
    {teamName: "Manchester City", teamId:3},
    {teamName: "Liverpool", teamId: 4},
    {teamName: "Arsenal", teamId: 5},
    {teamName: "Manchester United", teamId: 6},
    {teamName: "Everton", teamId: 7}
  ]

  result:any = {}

  constructor(
    private storageService: StorageService, 
    private router: Router) {


  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.storageService.add(this.result)
    this.router.navigate([''])
  }

}
