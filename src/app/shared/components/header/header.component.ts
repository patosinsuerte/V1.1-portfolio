import { Component, computed, HostListener, inject, signal } from '@angular/core';
import { HeaderStatus } from '../../enums/header-status.enum';
import { ActivateLinkColorService } from '../../services/activate-link-color.service';
import { ScrollToService } from '../../services/scroll-to.service';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public activateLinkColorService = inject(ActivateLinkColorService);
  public scrollToService = inject(ScrollToService);
  private navBarService = inject(NavBarService);


  private scrollTimeout: any;

  public headerStatus = HeaderStatus;

  public currentLinkStatus = computed(() => this.activateLinkColorService.linkStatus());


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


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.activateLinkColorService.setCurrentSection();
    }, 95);
  }


  scrollTo(id: string) {
    this.scrollToService.scrollToElement(id);
  }


  toggleNavBar(): void {
    this.navBarService.navBarIsActive = !this.navBarService.navBarIsActive;
  }


  toggleOpacity(): void {
    this.navBarService.opacity = !this.navBarService.opacity;
  }


}
