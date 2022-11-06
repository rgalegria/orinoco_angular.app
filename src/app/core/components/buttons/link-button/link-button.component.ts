import { Component, OnInit, Input } from '@angular/core';
import { Params } from '@angular/router';

@Component({
    selector: 'app-link-button',
    templateUrl: './link-button.component.html',
    styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent implements OnInit {
    @Input() linkStyle: string = '';
    @Input() linkType: string = 'text';
    @Input() link: string = '#';
    @Input() label: string = '';
    @Input() icon: string = '';
    @Input() params: Params = {};

    //   constructor() { }

    ngOnInit(): void {}
}
