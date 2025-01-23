import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public menuOption: string = 'home'; // Default menu option

  /**
   * Handles the selection of a menu option and sets it as active.
   * @param menuOption - The selected menu option.
   */
  handleSelectMenuOption(menuOption: string): void {
    this.menuOption = menuOption;
  }
}
