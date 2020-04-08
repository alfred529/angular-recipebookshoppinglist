import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-recipebookshoppinglist';
  loadedFeature = 'recipe'; //state of which feature is being displayed (recipe or shopping list)

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
