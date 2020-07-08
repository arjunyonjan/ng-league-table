import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../services/storage.service'

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	@Input('mode') mode: string

	errors = false;
	errorMessage;
	result: any = {}
	teams = []

	constructor(private route: ActivatedRoute,
		private router: Router,
		private storageService: StorageService) {
		this.teams = storageService.teams
	}

	ngOnInit(): void {

		console.log(this.mode, "$$$$");

		if (this.mode === 'edit') {

			this.route.params.subscribe((params) => {
				let result = this.storageService.getById(params.id)
				this.result = result
			})
		}
	}


	onSubmit(resultForm) {
		console.log("here...", "$$$$");

		if (resultForm.form.valid) {
			if (this.result.team1 == this.result.team2) {

				this.errors = true;
				this.errorMessage = "Both teams can not be same";
				return;
			} else {
				this.errors = false;
				this.errorMessage = ""
			}

			if(this.mode==="new"){
				this.storageService.add(this.result)
			}else{
				this.storageService.update(this.result)
			}

			this.router.navigate([''])
		}
	}
}
