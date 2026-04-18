import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { HeroComponent } from '../components/hero/hero.component';
import { ServiceCardComponent } from '../components/service-card/service-card.component';
import { ServiceLink } from '../models/service.model';
import { LayoutComponent } from '../../../shared/layout/layout.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home.page.html',
  imports: [
    NgFor,
    HeroComponent,
    ServiceCardComponent,
    LayoutComponent 
  ]
})
export class HomePage {

  services: ServiceLink[] = [
    {
      title: 'TDK Academy',
      description: 'E-Learning Plattform',
      url: 'https://academy.tdksoftconsulting.de',
      icon: 'TA',
      cta: 'Open'
    },
    {
      title: 'Metabase BI',
      description: 'Dashboards & Analytics',
      url: 'https://metabase.tdksoftconsulting.de',
      icon: 'MB',
      cta: 'Open'
    },
        {
      title: 'Egotherapie - PORTAL',
      description: 'Zugang zu Ergotherapeute -Ressourcen und internen Management.</',
      url: 'https://ergo-maffo.tdksoftconsulting.de',
      icon: 'TA',
      cta: 'Open'
    },
    {
      title: 'Medizinische Mission',
      description: 'Verwaltung der Patientenakten und medizinische Nachverfolgung via OpenMRS.',
      url: 'https://medmission.tdksoftconsulting.de',
      icon: 'MB',
      cta: 'Open'
    }
  ];
}