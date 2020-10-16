import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StandardFilterModel } from '../services/FilterService/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() filters: StandardFilterModel[];
  @Input() filterFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {}

}
