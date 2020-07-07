import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
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
