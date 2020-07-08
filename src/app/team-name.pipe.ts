import { Pipe, PipeTransform } from '@angular/core';
import { StorageService } from './services/storage.service'

@Pipe({
  name: 'teamName'
})
export class TeamNamePipe implements PipeTransform {
	constructor(private storageService: StorageService){}

  transform(value: number, ...args: unknown[]): unknown {
    return this.getTeamName(value);
  }

  getTeamName(teamId){
  	for(let team of this.storageService.teams){
  		if(teamId == team.teamId){
  			return team.teamName
  		}
  	}
  }

}
