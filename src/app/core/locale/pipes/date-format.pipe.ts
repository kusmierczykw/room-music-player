import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DD_MM_YYYY } from '@core/locale/consts/date-format';
import { isNil, Nil } from '@utils/types/nil';

type DatePipeValue = Nil<Date | string | number>;

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  constructor(private readonly datePipe: DatePipe) {}

  transform(
    value: DatePipeValue,
    format = DD_MM_YYYY,
    timezone?: string,
    locale?: string,
  ): Nil<string> {
    return isNil(value)
      ? value
      : this.datePipe.transform(value, format, timezone, locale);
  }
}
