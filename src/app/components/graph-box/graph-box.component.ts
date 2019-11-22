import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'graph-box',
  templateUrl: './graph-box.component.html',
  styleUrls: ['./graph-box.component.css']
})
export class GraphBoxComponent implements OnInit {
  @Input() someGraph: any;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
    console.log('from graph-box:', this.someGraph);
    
  }

}
