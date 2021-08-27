import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoginComponent,
    ToolbarComponent,
    WildComponent
  ],
})
export class UiLibraryModule {}
