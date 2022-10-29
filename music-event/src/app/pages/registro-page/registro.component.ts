import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit, OnDestroy {
  constructor() {}
  ngOnDestroy(): void {
    console.log('destrution');
  }

  ngOnInit(): void {}
}
