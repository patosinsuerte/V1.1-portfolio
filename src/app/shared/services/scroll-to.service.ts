import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }


  scrollToElement(elementId: string): void {
    // const element = document.getElementById(elementId);
    // if (element) {
    //     element.scrollIntoView({ behavior: 'smooth' });
    // }

    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const yOffset = 20;

      window.scrollTo({
        top: rect.top + window.scrollY + yOffset,
        behavior: 'smooth'
      });
    }
  }



  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
