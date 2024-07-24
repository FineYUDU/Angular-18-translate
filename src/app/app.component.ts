import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LocalStorageService } from './core/services/localstorage.service';
import { TranslateService } from './core/services/translate.service';

import { TranslatePipe } from './shared/pipes/translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public translateService = inject(TranslateService); 
  public localStorageService = inject(LocalStorageService); 
}
