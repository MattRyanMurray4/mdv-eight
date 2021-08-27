import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Gangster } from '@mafias/api-interfaces';

@Component({
  selector: 'mafias-gangster-details',
  templateUrl: './gangster-details.component.html',
  styleUrls: ['./gangster-details.component.scss'],
})
export class GangsterDetailsComponent {
  currentGangster: Gangster;
  originalName: string;

  @Input() set gangster(value: Gangster | null) {
    if (value) this.originalName = value.name;
    this.currentGangster = Object.assign({}, value);
  }
  @Input()
  form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  save(gangster: Gangster) {
    this.saved.emit(gangster);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    if (this.form.invalid) return;
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }
}
