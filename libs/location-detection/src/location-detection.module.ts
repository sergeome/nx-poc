import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})
export class LocationDetectionModule {

  public getLocation(): string {
    return 'New York';
  }

}
