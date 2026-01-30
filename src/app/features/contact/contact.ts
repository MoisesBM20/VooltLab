import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit{
ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
