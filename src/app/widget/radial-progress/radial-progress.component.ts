import { Component, Input, OnChanges, ElementRef } from '@angular/core';

//declare var d3: any;
import * as d3 from 'd3';


@Component({
    selector: 'radial-progress',
    template: '<ng-content></ng-content>'
})

export class RadialProgressComponent {
    @Input()
        progressValue: any;

    private svgCanvas: any;
    private colours: Object;
    private start: number;
    private end: number;
    private radius: number;
    private border: number;
    private strokeSpacing: number;


    constructor(private element: ElementRef) {
        this.svgCanvas = d3.select(this.element.nativeElement);

    }


    ngOnChanges(): void {
        this.setup();
        this.render();

    }

     private setup(): void {
        
        this.start = 0;
        this.end = parseFloat(this.progressValue);
        this.radius = 80;
        this.border = 12;
        this.strokeSpacing = 4;

    }

    private render(): void {

        let colours = {
            fill: '#03A9F4',
            track: '#B3E5FC',
            text: '#03A9F4',
            stroke: '#FFFFFF',
        };

        let endAngle = Math.PI * 2;
        let formatText = d3.format('.0%');
        let boxSize = this.radius * 2;
        let count = this.end;
        let progress = this.start;
        let step = this.end < this.start ? -0.01 : 0.01;

        //Define the circle
        let circle = d3.svg.arc()
                .startAngle(0)
                .innerRadius(this.radius)
                .outerRadius(this.radius - this.border);

        //setup SVG wrapper
        let svg = d3.select(this.element.nativeElement)
                .append('svg')
                .attr('width', boxSize)
                .attr('height', boxSize);

        // ADD Group container
        let g = svg.append('g')
                .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

        //Setup track
        let track = g.append('g').attr('class', 'radial-progress');

        track.append('path')
                .attr('class', 'radial-progress__background')
                .attr('fill', colours.track)
                .attr('stroke', colours.stroke)
                .attr('stroke-width', this.strokeSpacing + 'px')
                .attr('d', circle.endAngle(endAngle));

        //Add colour fill
        let value = track.append('path')
                .attr('class', 'radial-progress__value')
                .attr('fill', colours.fill)
                .attr('stroke', colours.stroke)
                .attr('stroke-width', this.strokeSpacing + 'px');

        //Add text value
        let numberText = track.append('text')
                .attr('class', 'radial-progress__text')
                .attr('fill', colours.text)
                .attr('text-anchor', 'middle')
                .attr('dy', '.5rem');

        function update(progress) {
            //update position of endAngle
            value.attr('d', circle.endAngle(endAngle * progress));
            //update text value
            numberText.text(formatText(progress));
        } 

        (function iterate() {
        //call update to begin animation
        update(progress);
        if (count > 0) {
            //reduce count till it reaches 0
            count--;
            //increase progress
            progress += step;
            //Control the speed of the fill
            setTimeout(iterate, 10);
        }
        })();

    }


}