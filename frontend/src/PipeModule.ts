 import { NgModule } from '@angular/core';
 import { DateAgoPipe } from './pipes/date-ago.pipe';
 import { TimeAgoPipe } from './pipes/TimeAgo.pipe';

 @NgModule({
     imports:        [],
     declarations:   [TimeAgoPipe, DateAgoPipe],
     exports:        [TimeAgoPipe, DateAgoPipe],
 })
 export class PipeModule {

   static forRoot() {
      return {
          ngModule: PipeModule,
          providers: [],
      };
   }
 } 