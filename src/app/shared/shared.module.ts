import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { SmashScreenComponent } from './smash-screen/smash-screen.component';
import { ProgramInfoComponent } from './program-info/program-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScheduleComponent, SmashScreenComponent, ProgramInfoComponent],
  exports:[ScheduleComponent,SmashScreenComponent, ProgramInfoComponent]
  
})
export class SharedModule { }
