import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  
  registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        firstName: new FormControl(
          '', 
          [Validators.required, 
            Validators.minLength(3)]
            ),
        lastName: new FormControl(
          '' , 
          [
            Validators.required,
            Validators.pattern('[a-zA-Z]+$')
          ]
        ),
        address: new FormGroup(
          {
            street: new FormControl(
              '',
              Validators.required
              ),
            city: new FormControl()
          })
      });
  }

  onSubmit(){
    console.log(this.registerForm.value);
    alert(`SUCCESS\n\n`
    + JSON.stringify(this.registerForm.value, null, 4));
  }

  reset(){
    this.registerForm.reset();
  }
}
