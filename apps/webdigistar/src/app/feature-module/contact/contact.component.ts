import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'webdigistarorg-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  })

  onSubmit() {
    console.warn(this.contactForm.value);
  }
}
