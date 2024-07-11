import { computed, inject, Injectable, signal } from '@angular/core';
import { HeaderStatus } from '../enums/header-status.enum';
import { ScrollToService } from './scroll-to.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateLinkColorService {

  private _linkStatus = signal<HeaderStatus>(HeaderStatus.INDEX);
  public linkStatus = computed(() => this._linkStatus());
  private scrollToService = inject(ScrollToService);


  public changeLinkStatusToIndex() {
    this._linkStatus.set(HeaderStatus.INDEX);
  }

  public changeLinkStatusToAbout() {
    this._linkStatus.set(HeaderStatus.ABOUT);
  }


  public changeLinkStatusToServices() {
    this._linkStatus.set(HeaderStatus.SERVICES);
  }

  public changeLinkStatusToProjects() {
    this._linkStatus.set(HeaderStatus.PROJECTS);
  }



  setCurrentSection(): void {

    const sections = document.querySelectorAll('section');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const currentPath = window.location.pathname;

    if (currentPath !== "/") {
      this._linkStatus.set(HeaderStatus.INDEX); // Si la ruta es diferente a '/', establece activeLink como 0
      return; // Sal de la función porque no necesitas seguir verificando las secciones
    }
    sections.forEach((section: HTMLElement, index: number) => {
      const sectionId = section.id;
      const sectionOffset = section.offsetTop;

      if (scrollTop >= sectionOffset && (!sections[index + 1] || scrollTop < sections[index + 1].offsetTop)) {
        switch (sectionId) {
          case 'home':
            this._linkStatus.set(HeaderStatus.INDEX);
            // this.scrollToService.scrollToElement('home');
            break;

          case 'about':
            this._linkStatus.set(HeaderStatus.ABOUT);
            // this.scrollToService.scrollToElement('about');
            break;
          case 'services':
            this._linkStatus.set(HeaderStatus.SERVICES);
            // this.scrollToService.scrollToElement('services');
            break;

          case 'projects':
            this._linkStatus.set(HeaderStatus.PROJECTS);
            // this.scrollToService.scrollToElement('projects');
            break;
          default:
            this._linkStatus.set(HeaderStatus.INDEX);
            break;
        }
      }
    });
  }











}
