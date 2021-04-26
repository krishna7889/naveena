import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-corporate-form',
  templateUrl: './corporate-form.component.html',
  styleUrls: ['./corporate-form.component.scss', '/assets/sass/libs/select.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CorporateFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  corporateFormGroup: FormGroup;

  customers = [
    { id: 1, name: 'Vilnius Vilnius(14324234)' },
    { id: 2, name: 'Kaunas Vilnius (32345334)' },
    { id: 3, name: 'Pavilnys Klaipėda (214345324)', disabled: true },
    { id: 4, name: 'Pabradė Klaipėda (4235345)' },
    { id: 5, name: 'Klaipėda Test (23426522)' },
  ];

  contacts = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];

  siteNames = [
    { id: 1, name: 'Google' },
    { id: 2, name: 'Facebook' },
    { id: 3, name: 'Gmail', disabled: true },
    { id: 4, name: 'Test' },
    { id: 5, name: 'RTE' },
  ];

  statuses = [
    { id: 1, name: 'Modified' },
    { id: 2, name: 'New' },
    { id: 3, name: 'Removed' },
  ];

  priorities = [
    { id: 1, name: 'L' },
    { id: 2, name: 'M' },
    { id: 3, name: 'H' },
  ];

  severities = [
    { id: 1, name: 'L' },
    { id: 2, name: 'M' },
    { id: 3, name: 'H' },
  ];

  ngOnInit(): void {
    this.initializeCorporateForm();
  }

  initializeCorporateForm() {
    this.corporateFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      siteName: ['', Validators.required],
      contactName: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      severity: ['', Validators.required],
    });
  }
}
