import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { DateAgoPipe } from '../../pipes/date-ago.pipe';
import { TimeAgoPipe } from '../../pipes/TimeAgo.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
  ],
  declarations: [Tab1Page, DateAgoPipe, TimeAgoPipe]
})
export class Tab1PageModule {}
