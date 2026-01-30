import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bussiness',
  imports: [],
  templateUrl: './bussiness.html',
  styleUrl: './bussiness.scss',
})
export class Bussiness implements AfterViewInit{
ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
}
