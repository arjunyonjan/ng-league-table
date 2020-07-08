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

  randString(x) {
    var s = "";
    while (s.length < x && x > 0) {
      var r = Math.random();
      s += (r < 0.1 ? Math.floor(r * 100) : String.fromCharCode(Math.floor(r * 26) + (r > 0.5 ? 97 : 65)));
    }
    return s;
  }

  getById(id){
      for(let result of this.results){
        if(result.id === id){
          return result
        }
      }
  }

  getIndex(id){
      for(let [i,result] of this.results.entries()){
        if(result.id === id){
          return i
        }
      }
  }

  add(result){
    result.id = this.randString(10)
  	this.results.push(result)
  	this.updateLocalStorage()
  }

  update(result){
    let index = this.getIndex(result.id)
    //overwrite
    this.results[index] = result
    this.updateLocalStorage()

  }

  delete(result){
    let index = this.getIndex(result.id)
    this.results.splice(index,1);
    this.updateLocalStorage()

  }

  updateLocalStorage(){
  	localStorage.setItem('results', JSON.stringify(this.results));
  }
}
