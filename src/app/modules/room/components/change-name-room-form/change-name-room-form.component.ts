import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-name-room-form',
  standalone: true,
  templateUrl: './change-name-room-form.component.html',
  styleUrls: ['./change-name-room-form.component.scss'],
  imports: [ReactiveFormsModule],
})
export class ChangeNameRoomFormComponent implements OnInit {
  constructor(private readonly builder: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.configureForm();
  }

  private configureForm(): void {}
}
