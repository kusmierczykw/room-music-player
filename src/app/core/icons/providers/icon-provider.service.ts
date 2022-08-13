import { Injectable } from '@angular/core';
import { Icon } from '@core/icons/enums/icon';

@Injectable({
  providedIn: 'root',
})
export class IconProviderService {
  private icons: Record<Icon, string> = {
    [Icon.LIST]: 'bi bi-list',
    [Icon.MUSIC_PLAYER]: 'bi bi-music-player',
    [Icon.MUSIC_NOTE]: 'bi bi-music-note',
    [Icon.MUSIC_NOTE_BEAMED]: 'bi bi-music-note-beamed',
    [Icon.HEART]: 'bi bi-heart',
    [Icon.HEART_FILL]: 'bi bi-heart-fill',
    [Icon.PALETTE]: 'bi bi-palette',
    [Icon.PLAY_CIRCLE_FILL]: 'bi bi-play-circle-fill',
    [Icon.PAUSE_CIRCLE_FILL]: 'bi bi-pause-circle-fill',
    [Icon.PLUS_CIRCLE_DOTTED]: 'bi bi-plus-circle-dotted',
    [Icon.SHUFFLE]: 'bi bi-shuffle',
    [Icon.SKIP_END_FILL]: 'bi bi-skip-end-fill',
    [Icon.SKIP_START_FILL]: 'bi bi-skip-start-fill',
    [Icon.STOP_CIRCLE_FILL]: 'bi bi-stop-circle-fill',
  };

  icon(icon: Icon): string {
    return this.icons[icon];
  }
}
