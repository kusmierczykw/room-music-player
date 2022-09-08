import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FetchRoomActionService } from '@modules/room/services/fetch-room-action.service';
import { map, Observable, switchMap } from 'rxjs';
import { Room } from '@modules/room/models/room';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { Uuid } from '@core/uuid/types/uuid';

@Component({
  selector: 'app-update-room-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-room-page.component.html',
  styleUrls: ['./update-room-page.component.scss'],
})
export class UpdateRoomPageComponent {
  readonly room$: Observable<Room>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly fetchRoomAction: FetchRoomActionService,
  ) {
    this.room$ = this.activatedRoute.paramMap.pipe(
      map((param) => param.get(RouterPathParam.ROOM_ID) as Uuid),
      switchMap((id) => this.fetchRoomAction.fetchById(id)),
    );
  }
}
