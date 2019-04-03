import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from './metrics/metrics.component';
import { SearchFareComponent } from './search-fare/search-fare.component';

// FIXME: Current routing is not working great with Spring MVC
const routes: Routes = [
  { path: '', redirectTo: '/search-fare', pathMatch: 'full' },
  { path: 'search-fare', component: SearchFareComponent },
  { path: 'metrics', component: MetricsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
