import { Component, OnInit, Input } from '@angular/core';
@Component({
selector: 'app-childcomp',
templateUrl: './childcomp.component.html',
styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {
constructor() { }
ngOnInit() {
}
@Input() public name: any;
}