import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-module',
  templateUrl: './input-module.component.html',
  styleUrls: ['./input-module.component.css']
})
export class InputModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nameVar: string = "";

  onNameCheck(): boolean {
    return this.nameVar === "";
  }

  onResetName(): void {
    this.nameVar = "";
  }
}
