import { BaseComponent, createComponent } from '../../utils/core';


export class Button extends BaseComponent {
    constructor(click: ()=> void) {
        super({
            tag: 'button',
            id: '',
            classList: ['example-button', 'class-button'],
            children: ['BUTTON'],
            events: {
                click
            }
        })
    }

    onHover() {
        this.element.classList.toggle('hover')
    }
}