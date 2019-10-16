import { Component, Directive, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'hot-header',
    template: '<ng-content></ng-content>'
})
export class Header {}

@Component({
    selector: 'hot-footer',
    template: '<ng-content></ng-content>'
})
export class Footer {}

@Directive({
    selector: '[hotTemplate]',
    host: {
    }
})
export class HeinekenTemplate {
    
    @Input() type: string;
    
    @Input('hotTemplate') name: string;
    
    constructor(public template: TemplateRef<any>) {}
    
    getType(): string {
        return this.name;
    }
}