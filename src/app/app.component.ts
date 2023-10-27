import { Component } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { eThemeLeptonXComponents } from '@volosoft/abp.ng.theme.lepton-x';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-gdpr-cookie-consent></abp-gdpr-cookie-consent>
  `,
})
export class AppComponent {
  constructor(private replaceableComponentsService: ReplaceableComponentsService ){
    // this.replaceableComponentsService.add({
    //   component: LayoutComponent,
    //   key: eThemeLeptonXComponents.ApplicationLayout
    // })
  }
}
