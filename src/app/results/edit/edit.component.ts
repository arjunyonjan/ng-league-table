import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
  	private router: Router,
  	private storageService: StorageService) {}

  mode = 'edit'

  ngOnInit(): void {

  	
  }

}
