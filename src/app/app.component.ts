import { Component } from '@angular/core';
import { ScrollTopAfterNavigationService } from '@core/scroll/services/scroll-top-after-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private readonly scrollTopAfterNavigation: ScrollTopAfterNavigationService,
  ) {}
}
