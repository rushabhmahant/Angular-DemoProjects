import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  status:string[] = ['Active', 'Inactive'];
  bookForm!:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.bookForm = this.formBuilder.group({
      bookName:['',Validators.required],
      bookCategory:['',Validators.required],
      bookPublishedDate:['',Validators.required],
      bookStatus:['',Validators.required],
      bookPrice:['',Validators.required],
      comments:[]
    })

  }
  addBook(){
    console.log(this.bookForm.value)
  }

}
