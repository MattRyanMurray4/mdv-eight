import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Gangster } from '@mafias/api-interfaces';
import { GangstersService, NotifyService } from '@mafias/core-data';
import { take, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GangstersFacade {
  private _allGangstersSource$ = new BehaviorSubject<Gangster[]>([]);
  allGangsters$: Observable<Gangster[]> =
    this._allGangstersSource$.asObservable();
  private _selectedGangsterSource$ = new BehaviorSubject<Gangster>(
    {} as Gangster
  );
  selectedGangster$: Observable<Gangster> =
    this._selectedGangsterSource$.asObservable();

  constructor(
    private gangstersService: GangstersService,
    private notify: NotifyService
  ) {}

  loadGangsters() {
    this.gangstersService
      .all()
      .pipe(
        tap((gangsters) => this._allGangstersSource$.next(gangsters)),
        take(1)
      )
      .subscribe();
  }

  selectGangster(gangsterId: string) {
    return this.gangstersService
      .find(gangsterId)
      .pipe(
        tap((gangsterId) => this._selectedGangsterSource$.next(gangsterId)),
        take(1)
      )
      .subscribe(() => {
        this.loadGangsters();
      });
  }

  createGangster(gangster: Gangster) {
    return this.gangstersService
      .create(gangster)
      .pipe(
        tap((gangster) => this._selectedGangsterSource$.next(gangster)),
        take(1)
      )
      .subscribe(() => {
        this.loadGangsters();
        this.notify.notification(`Created ${gangster.name} successfully!`);
      });
  }

  updateGangster(gangster: Gangster) {
    return this.gangstersService
      .update(gangster)
      .pipe(
        tap((gangster) => this._selectedGangsterSource$.next(gangster)),
        take(1)
      )
      .subscribe(() => {
        this.loadGangsters();
        this.notify.notification(`Updated ${gangster.name} successfully!`);
      });
  }

  deleteGangster(gangster: Gangster) {
    return this.gangstersService
      .delete(gangster)
      .pipe(
        tap((gangster) => this._selectedGangsterSource$.next(gangster)),
        take(1)
      )
      .subscribe(() => {
        this.loadGangsters();
        this.notify.notification(`Deleted ${gangster.name} successfully!`);
      });
  }
}
