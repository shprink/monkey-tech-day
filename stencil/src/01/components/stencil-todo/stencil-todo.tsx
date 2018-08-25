import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-todo',
  styleUrl: 'stencil-todo.css',
})
export class StencilTodo {

  // Indicate that name should be a public property on the component
  @Prop() name: string = 'julien';

  render() {
    return (
      <p>
        My name is {this.name}
      </p>
    );
  }
}