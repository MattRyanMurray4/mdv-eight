import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GangstersFacade } from './gangsters/gangsters.facade';

@NgModule({
  imports: [CommonModule],
  providers: [GangstersFacade],
})
export class CoreStateModule {}
