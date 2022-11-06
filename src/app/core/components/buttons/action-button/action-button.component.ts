import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
    @Input() label: string = '';
    @Input() btnType: string = 'primary';

    @Output() onClick = new EventEmitter<any>();

    handleClick = () => {
        //some logic
        console.log('btn click');
        this.onClick.emit();
        // here we can also pass the event or other data that we want to receive in the parent component
    };

    // constructor() {}

    ngOnInit(): void {}
}
