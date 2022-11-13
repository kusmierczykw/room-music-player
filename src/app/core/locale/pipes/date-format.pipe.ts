import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DD_MM_YYYY } from '@core/locale/consts/date-format';
import { Nullable } from '@utils/types/nullable/nullable';
import { isNullable } from '@utils/types/nullable/is-nullable';

type DatePipeValue = Nullable<Date | string | number>;

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
  ): Nullable<string> {
    return isNullable(value)
      ? value
      : this.datePipe.transform(value, format, timezone, locale);
  }
}
