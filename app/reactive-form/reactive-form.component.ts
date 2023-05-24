import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms'
import { User } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  newUser!: User;
  constructor(private fb: FormBuilder){}

  userForm = this.fb.group({
    name:[''],
    adress:[''],
    credential: this.fb.group({
      email: [''],
      password: ['']
  })
});
  

  onSubmit(){
     this.newUser = {
       name: this.userForm.value.name,
       adress: this.userForm.value.adress,
       credential :{password: this.userForm.value.credential?.password,
                    email: this.userForm.value.credential?.email}
     }
  }
}
