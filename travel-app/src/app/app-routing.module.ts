import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from './metrics/metrics.component';
import { SearchFareComponent } from './search-fare/search-fare.component';

// FIXME: Routing doesn't work with the Spring MVC configuration
const routes: Routes = [
  { path: '', redirectTo: '/search-fare', pathMatch: 'full' },
  { path: 'search-fare', component: SearchFareComponent },
  { path: 'metrics', component: MetricsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
