import './index.scss';
import { createComponent } from '../../utils/core';

export const button = (click: () => void) => {

    const onHover = (event: any) => {
        event?.target?.classList.toggle('hover')
    }

  return createComponent<MouseEvent>({
    tag: 'button',
    id: '',
    classList: ['example-button', 'fn-button'],
    children: ['BUTTON'],
    events: {
        click: (event: MouseEvent) => {
            onHover(event)
            click()
        }
    }
  });
};
