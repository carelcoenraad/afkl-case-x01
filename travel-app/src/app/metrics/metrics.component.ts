import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.sass'],
})
export class MetricsComponent implements OnInit {
  trace: any;

  constructor(private metricsService: MetricsService) {}

  ngOnInit() {
    this.metricsService.getHttpTrace().subscribe(trace => (this.trace = trace));
  }
}
