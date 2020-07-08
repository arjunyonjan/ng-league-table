import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  teams = [
    {teamName: "Chelsea", teamId: 1},
    {teamName: "Tottenham Hotspur", teamId: 2},
    {teamName: "Manchester City", teamId:3},
    {teamName: "Liverpool", teamId: 4},
    {teamName: "Arsenal", teamId: 5},
    {teamName: "Manchester United", teamId: 6},
    {teamName: "Everton", teamId: 7}
  ]

  results = [];
  constructor() { 
  	let data = JSON.parse(localStorage.getItem('results'))
  	this.results = data ? data : []
  }

  getById(){

  }

  add(result){
  	this.results.push(result)
  	this.updateLocalStorage()
  }

  edit(){}

  delete(){}

  updateLocalStorage(){
  	localStorage.setItem('results', JSON.stringify(this.results));
  }
}
