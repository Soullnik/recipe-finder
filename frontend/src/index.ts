import { button } from "./components/exampe-fn-button/index"
import { Button } from "./components/example-class-button/index"
import { BaseComponent, createComponent } from "./utils/core"

const root = document.querySelector('#root')

const containerFN = () => {
    const click = () => {
        console.log('CLICK')
    }
    return createComponent({
        tag: 'div',
        id: '',
        classList: ['example-container'],
        children: [button(click), new Button(click).render()],
      });
}

class ContainerClass extends BaseComponent {
    button: Button
    constructor() {
        super({
            tag: 'div',
            id: '',
            classList: ['example-container'],
            children: [],
          })
          this.button = new Button(this.clickClass)
    }

    render(): HTMLElement {
        this.element.append(this.button.render(), button(this.clickFn))
        return this.element
    }

    clickClass = () => {
        console.log('CLICK clickClass')
        this.button.onHover()
    }

    clickFn = () => {
        console.log('CLICK clickFn')
    }

}



root?.append(containerFN(), new ContainerClass().render())
