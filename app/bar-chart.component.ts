/**
 * bar-chart.component.ts
 * ======================
 *
 * To use this component, please include the following on the application's HTML:
 *
 * <script src="node_modules/d3/d3.js"></script>
 * <link rel="stylesheet" href="node_modules/nvd3/build/nv.d3.css"/>
 * <script src="node_modules/nvd3/build/nv.d3.js"></script>
 *
 * For future evolutions, the architecture may be enhanced by loading these dependencies
 * in this class.
 *
 * - for the CSS, loading it through @Component.styleUrls, for some reason, doesn't work
 * - for the JavaScripts, import 'module.js' doesn't work as well
 *
 */

// for some reason, these do not work
// import 'node_modules/d3/d3.js';
// import 'node_modules/nvd3/build/nv.d3.js';

import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {nvD3} from 'ng2-nvd3';
declare let d3: any;

@Component({
    selector: 'nvd3-bar-chart',
    /* styleUrls: ['node_modules/nvd3/build/nv.d3.css'], // this seems not to work... but why?? */
    directives: [nvD3],
    template: `
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
  `
})

export class BarChart implements OnInit {

    options: any;
    data   : any;

    // @ViewChild(nvD3)
    // nvD3: nvD3;

    ngOnInit() {
        this.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 50,
                    left: 55
                },
                x: function(d:any) { return d.label; },
                y: function(d:any) { return d.value; },
                showValues: true,
                valueFormat: function(d:any) {
                    return d3.format(',.4f')(d);
                },
                duration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: -10
                }
            }
        };
        this.data = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "A" ,
                        "value" : -29.765957771107
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 32.807804682612
                    } ,
                    {
                        "label" : "D" ,
                        "value" : 196.45946739256
                    } ,
                    {
                        "label" : "E" ,
                        "value" : 0.19434030906893
                    } ,
                    {
                        "label" : "F" ,
                        "value" : -98.079782601442
                    } ,
                    {
                        "label" : "G" ,
                        "value" : -13.925743130903
                    } ,
                    {
                        "label" : "H" ,
                        "value" : -5.1387322875705
                    }
                ]
            }
        ];
    }

    ngAfterViewInit() {
        // this.nvD3 - directive instance
        // for example, to update the chart
        // this.nvD3.chart.update()
    }
}