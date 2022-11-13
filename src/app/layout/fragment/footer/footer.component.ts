import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '@core/locale/pipe/date-format.pipe';
import { YYYY } from '@core/locale/const/date-format';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  readonly YYYY = YYYY;

  today!: Date;

  ngOnInit(): void {
    this.configureToday();
  }

  private configureToday(): void {
    this.today = new Date();
  }
}
