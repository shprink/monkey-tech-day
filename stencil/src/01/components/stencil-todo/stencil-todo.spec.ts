import { TestWindow } from '@stencil/core/testing';
import { StencilTodo } from './stencil-todo';

describe('01 stencil-todo', () => {
    it('should build', () => {
        expect(new StencilTodo()).toBeTruthy();
    });

    describe('rendering', () => {
        let element: HTMLMyComponentElement;
        let testWindow: TestWindow;
        beforeEach(async () => {
            testWindow = new TestWindow();
            element = await testWindow.load({
                components: [StencilTodo],
                html: '<stencil-todo></stencil-todo>'
            });
        });

        it('should work without parameters', () => {
          expect(element.textContent.trim()).toEqual('My name is julien');
        });

        // it('should work with a first name', async () => {
        //   element.first = 'Peter';
        //   await testWindow.flush();
        //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
        // });

        // it('should work with a last name', async () => {
        //   element.last = 'Parker';
        //   await testWindow.flush();
        //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
        // });

        // it('should work with both a first and a last name', async () => {
        //   element.first = 'Peter';
        //   element.last = 'Parker';
        //   await testWindow.flush();
        //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
        // });
    });
});
