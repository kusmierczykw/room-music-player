import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers/root.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forRoot(rootReducer)],
  providers: [],
})
export class RootStoreModule {}
