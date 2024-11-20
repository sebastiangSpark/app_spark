import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { GlbServiceService } from './services/glb-service.service'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private zone: NgZone, private glbService: GlbServiceService) {
    this.glbService.prueba();
    //this.initializeApp();
  }

  initializeApp(){
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      this.zone.run(() => {
        const domain = 'devdactic.com';
        
        const pathArray = event.url.split(domain);
        // The pathArray is now like ['https://devdactic.com', '/details/42']
        
        // Get the last element with pop()
        const appPath = pathArray.pop();
        if (appPath) {
          this.router.navigateByUrl(appPath);
        }
      });
    });
  }
}
