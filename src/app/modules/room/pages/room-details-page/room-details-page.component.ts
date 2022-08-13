import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Room } from '@modules/room/models/room';
import { RouterPathData } from '@routing/enums/router-path-data';
import { RoomAvatarComponent } from '@modules/room/components/room-avatar/room-avatar.component';

@Component({
  selector: 'app-room-details-page',
  standalone: true,
  imports: [CommonModule, RoomAvatarComponent],
  templateUrl: './room-details-page.component.html',
  styleUrls: ['./room-details-page.component.scss'],
})
export class RoomDetailsPageComponent {
  room$: Observable<Room>;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.room$ = this.roomSource$();
  }

  private roomSource$(): Observable<Room> {
    return this.activatedRoute.data.pipe(
      map((data) => data[RouterPathData.DETAILS]),
    );
  }
}
