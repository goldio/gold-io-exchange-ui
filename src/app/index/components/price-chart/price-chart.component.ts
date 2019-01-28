import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';

@Component({
	selector: 'price-chart',
	templateUrl: './price-chart.component.html',
	styleUrls: ['./price-chart.component.scss']
})
export class PriceChartComponent implements OnInit {

	public dataSource: any;
	public type: string;
	public width: string;
	public height: string;

	constructor() {
		this.type = 'timeseries';
		this.width = '100%';
		this.height = '400';

		// This is the dataSource of the chart
		this.dataSource = {
			// Initially data is set as null
			data: null,
			caption: {
				text: 'Apple Inc. Stock Price'
			},
			yAxis: {
				plot: {
					open: 'Open',
					high: 'High',
					low: 'Low',
					close: 'Close',
					type: 'candlestick'
				},
				title: 'Value'
			}
		};

		this.fetchData();
	}

	private fetchData() {
		const jsonify = (res: any) => res.json();

		const dataFetch = fetch(
			'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/candlestick-chart-data.json'
		).then(jsonify);

		const schemaFetch = fetch(
			'https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/candlestick-chart-schema.json'
		).then(jsonify);

		Promise.all([dataFetch, schemaFetch]).then(res => {
			const data = res[0];
			const schema = res[1];

			// First we are creating a DataStore
			const fusionDataStore = new FusionCharts.DataStore();

			// After that we are creating a DataTable by passing our data and schema as arguments
			const fusionTable = fusionDataStore.createDataTable(data, schema);

			// Afet that we simply mutated our timeseries datasource by attaching the above
			// DataTable into its data property.
			this.dataSource.data = fusionTable;
		});
	}

	ngOnInit() {

	}
}