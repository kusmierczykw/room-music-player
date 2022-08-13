import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { ActivatedRouteUtilsService } from '@routing/utils/activated-route-utils.service';
import { Room } from '@modules/room/models/room';
import { RoomDetailsProviderService } from '@modules/room/providers/room-details-provider.service';
import { Uuid } from '@core/uuid/types/uuid';
import { RouterPathParam } from '@routing/enums/router-path-param';
import { RouterLinkNavigateService } from '@routing/services/router-link-navigate.service';
import { RouterPath } from '@routing/enums/router-path';
import { Nil } from '@utils/types/nil';

@Injectable({
  providedIn: 'root',
})
export class RoomDetailsResolver implements Resolve<Nil<Room>> {
  constructor(
    private readonly activatedRouteUtils: ActivatedRouteUtilsService,
    private readonly roomDetailsProvider: RoomDetailsProviderService,
    private readonly routerLinkNavigate: RouterLinkNavigateService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Nil<Room>> {
    return this.roomDetailsProvider.room(this.roomId(route)).pipe(
      catchError(() => {
        this.routerLinkNavigate.navigate(RouterPath.ROOM_NOT_FOUND);

        return EMPTY;
      }),
    );
  }

  private roomId(snapshot: ActivatedRouteSnapshot): Uuid {
    return this.activatedRouteUtils.uuidParamFromSnapshot(
      RouterPathParam.ROOM_ID,
      snapshot,
    );
  }
}
