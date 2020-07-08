import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	tabledata = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {

  	let teams = [
	    {teamName: "Chelsea", teamId: 1},
	    {teamName: "Tottenham Hotspur", teamId: 2},
	    {teamName: "Manchester City", teamId:3},
	    {teamName: "Liverpool", teamId: 4},
	    {teamName: "Arsenal", teamId: 5},
	    {teamName: "Manchester United", teamId: 6},
	    {teamName: "Everton", teamId: 7}
	  ]

	let results = this.storageService.results

	let tabledata = {}

	teams.forEach((team, index)=>{

		let teamId = team.teamId

		if(!tabledata[teamId]){
				tabledata[teamId] = {
						teamName: team.teamName,
					  	played: 0,
					  	win: 0,
					  	lose: 0,
					  	draw: 0,
					  	points: 0,
					  	score: 0
					  };
				}


		results.forEach((result)=>{

		if(result.team1.teamId == teamId || result.team2.teamId == teamId){
				

				tabledata[teamId].played ++;

				if(result.team1.teamId == teamId){

					tabledata[teamId].score = tabledata[teamId].score +  parseInt(result.score1); 

					if(result.score1 === result.score2){
						tabledata[teamId].draw++;
						tabledata[teamId].points ++;
						return;

					}

					if(result.score1 > result.score2){
						tabledata[teamId].win ++;
						tabledata[teamId].points = tabledata[teamId].points+3;
					}else{
						tabledata[teamId].lose++;
					}
				}


				if(result.team2.teamId == teamId){

					tabledata[teamId].score = tabledata[teamId].score + parseInt(result.score2)

					if(result.score1 === result.score2){
						tabledata[teamId].draw++
						tabledata[teamId].points ++;

						return

					}


					if(result.score1 < result.score2){
						tabledata[teamId].win ++;
						tabledata[teamId].points =tabledata[teamId].points +3;
					}else{
						tabledata[teamId].lose++;
					}
				}

				
			}	//end if




		})


		

	})

	console.log(tabledata, "---table data----$$$$");

	 for(let i in tabledata){


	 	this.tabledata.push(tabledata[i])


	 }
  }

}
