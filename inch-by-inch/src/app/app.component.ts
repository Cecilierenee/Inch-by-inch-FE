import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Routine } from './routine';
import { RoutineService } from './routine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public routines?: Routine[] = [];

  constructor(private routineService: RoutineService) {}

  ngOnInit(): void {
      this.getAllRoutines();
  }

  public getAllRoutines(): void {
    this.routineService.getAllRoutines().subscribe(
      (response: Routine[]) => {
        this.routines = response;
      },
      (error: HttpErrorResponse) => {
        console.log('Get all error')
      }
      );
  }
  public onAddRoutine(addForm: NgForm): void {
    document.getElementById('addForm')?.click();
    this.routineService.addRoutine(addForm.value).subscribe(
      (response: Routine) => {
        console.log(response);
        this.getAllRoutines();
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    );
  }

 public onOpenModal(routine: Routine, mode: string): void {
    const container = document.getElementById('mainContainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-toggle', '#addRoutineModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-toggle', '#updateRoutineModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-toggle', '#deleteRoutineModal');
    }
    container?.appendChild(button);
    button.click();

}}
