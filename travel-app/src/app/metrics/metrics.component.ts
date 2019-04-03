import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.sass'],
})
export class MetricsComponent implements OnInit {
  apiTraces = [];
  clientErrors = [];
  okResponses = [];
  responseTimeAvg: number;
  responseTimeMax: number;
  responseTimeMin: number;
  serverErrors = [];

  constructor(private metricsService: MetricsService) {}

  ngOnInit() {
    this.metricsService.getHttpTrace().subscribe(response => this.filterMetrics(response.traces));
  }

  filterMetrics = traces => {
    this.apiTraces = traces.filter(trace => trace.request.uri.includes('/api'));
    const statuses = this.apiTraces.map(trace => trace.response.status);
    const responseTimes = this.apiTraces.map(trace => trace.timeTaken);
    this.okResponses = statuses.filter(status => status === 200);
    this.clientErrors = statuses.filter(status => status >= 400 && status <= 499);
    this.serverErrors = statuses.filter(status => status >= 500 && status <= 500);
    this.responseTimeAvg = Math.floor(responseTimes.reduce((acc, cur) => acc + cur, 0) / responseTimes.length);
    this.responseTimeMax = Math.max(...responseTimes);
    this.responseTimeMin = Math.min(...responseTimes);
  };
}
