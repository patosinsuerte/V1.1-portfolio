import { Component, computed, HostListener, inject } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { ActivateLinkColorService } from '../../services/activate-link-color.service';
import { ScrollToService } from '../../services/scroll-to.service';
import { HeaderStatus } from '../../enums/header-status.enum';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {





  public navBarService = inject(NavBarService);
  public activateLinkColorService = inject(ActivateLinkColorService);
  public scrollToService = inject(ScrollToService);
  public headerStatus = HeaderStatus;
  public currentLinkStatus = computed(() => this.activateLinkColorService.linkStatus());


  offNavMenu(): void {
    this.navBarService.navBarIsActive = !this.navBarService.navBarIsActive;
  }


  offOpacity(): void {
    this.navBarService.opacity = !this.navBarService.opacity;
  }


  // esconder el menu y la opacidad
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.navBarService.navBarIsActive) {
      return;
    }
    const targetElement = event.target as HTMLElement;
    if (targetElement.closest('.menu-opacity')) {
      this.navBarService.navBarIsActive = false;
      this.navBarService.opacity = false;
    }
  }



  scrollTo(id: string): void {
    this.scrollToService.scrollToElement(id);
  }


  public changeLinkStatusToIndex() {
    this.activateLinkColorService.changeLinkStatusToIndex();
  }

  public changeLinkStatusToAbout() {
    this.activateLinkColorService.changeLinkStatusToAbout();
  }


  public changeLinkStatusToServices() {
    this.activateLinkColorService.changeLinkStatusToServices();
  }


  public changeLinkStatusToProjects() {
    this.activateLinkColorService.changeLinkStatusToProjects();
  }

}
