import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meroapp',
  imports: [],
  templateUrl: './meroapp.html',
  styleUrl: './meroapp.scss',
})
export class Meroapp implements OnInit{
ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
