import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements OnInit{
ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
