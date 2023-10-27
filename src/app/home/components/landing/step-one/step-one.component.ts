import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
})
export class StepOneComponent implements OnInit {
  form: FormGroup;

  @Output() nextEvent: EventEmitter<void> = new EventEmitter<void>(); 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      whereToGo: [null, Validators.required],
      travelVibe: [null, Validators.required],
    });
  }

  categories: any[] = [
    { name: 'Northern Province', key: 'NP' },
    { name: 'Eastern Province', key: 'EP' },
    { name: 'Central Province', key: 'CP' },
    { name: 'Western Province', key: 'WP' },
    { name: 'Southern Province', key: 'SP' },
  ];

  vibes: any[] = [
    { name: 'Adventurous', key: 'adventurous' },
    { name: 'Wanderlust', key: 'wanderlust' },
    { name: 'Off the beaten path', key: 'off-the-beaten-path' },
    { name: 'Romantic', key: 'romantic' },
    { name: 'Chill', key: 'chill' },
    { name: 'Fast paced', key: 'fast-paced' },
    { name: 'Luxurious', key: 'luxurious' },
    { name: 'Spiritual', key: 'spiritual' },
    { name: 'Curious', key: 'curious' },
    { name: 'Other', key: 'other' },
  ];


  next() {
    console.log('go to next ....');
    console.log(this.form.value);

    if (this.form.invalid) return;
    this.nextEvent.emit();
  }
}
