import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyGangster, Gangster } from '@mafias/api-interfaces';
import { GangstersFacade } from '@mafias/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'mafias-gangsters',
  templateUrl: './gangsters.component.html',
  styleUrls: ['./gangsters.component.scss'],
})
export class GangstersComponent implements OnInit {
  gangsters$: Observable<Gangster[]> = this.gangstersFacade.allGangsters$;
  selectedGangster: Observable<Gangster> =
    this.gangstersFacade.selectedGangster$;
  form: FormGroup;
  constructor(
    private gangstersFacade: GangstersFacade,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
    this.gangstersFacade.loadGangsters();
    this.reset();
  }

  selectGangster(gangster: Gangster) {
    this.gangstersFacade.selectGangster(gangster.id);
    this.form.patchValue(gangster);
  }

  reset() {
    this.selectGangster(emptyGangster);
    this.form.reset();
  }

  createGangster(gangster: Gangster) {
    this.gangstersFacade.createGangster(gangster);
    this.reset();
  }

  updateGangster(gangster: Gangster) {
    this.gangstersFacade.updateGangster(gangster);
    this.reset();
  }

  saveGangster(gangster: Gangster) {
    gangster.id
      ? this.gangstersFacade.updateGangster(gangster)
      : this.gangstersFacade.createGangster(gangster);
  }

  deleteGangster(gangster: Gangster) {
    this.gangstersFacade.deleteGangster(gangster);
    this.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.required],
      alias: ['', Validators.required],
      mafiaRole: ['', Validators.required],
      peopleWhacked: ['', Validators.required],
      badTemper: [''],
    });
  }
}
