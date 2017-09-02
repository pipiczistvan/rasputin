import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class IconRegistryModule {

  constructor(private mdIconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    this.registerIcon('github-circle');
    this.registerIcon('fan');
  }

  private registerIcon(name: string) {
    this.mdIconRegistry.addSvgIconInNamespace('icon', name,
      this.sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/' + name + '.svg')
    );
  }

}
