import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gangster } from '@mafias/api-interfaces';

@Component({
  selector: 'mafias-gangsters-list',
  templateUrl: './gangsters-list.component.html',
  styleUrls: ['./gangsters-list.component.scss'],
})
export class GangstersListComponent {
  @Input() gangsters: Gangster[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
