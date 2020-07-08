import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results:any = []
  groupResults = []

  constructor(private storageService: StorageService, private router: Router) {

  }

  ngOnInit(): void {
    this.results = this.storageService.results;
    this.groupResults = this.groupData()
  }


  groupData(){
    //grouping by date
    let resultsGroup = this.results.reduce((groups, result)=>{
      let date = result.date;
       if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(result);
      return groups;
    },{})


    const groupArrays = Object.keys(resultsGroup).map((date) => {
     return {
        date,
        games: resultsGroup[date]
      };
    });

    /*Sorting*/
    const sortedResults = groupArrays.sort((a:any, b:any)=>{
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    return sortedResults
  }

  editResult(gameId){
    this.router.navigate(['edit', gameId]);
  }
}
