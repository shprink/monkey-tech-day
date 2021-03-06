/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface StencilTodo {
      'name': string;
    }
  }

  interface HTMLStencilTodoElement extends StencilComponents.StencilTodo, HTMLStencilElement {}

  var HTMLStencilTodoElement: {
    prototype: HTMLStencilTodoElement;
    new (): HTMLStencilTodoElement;
  };
  interface HTMLElementTagNameMap {
    'stencil-todo': HTMLStencilTodoElement;
  }
  interface ElementTagNameMap {
    'stencil-todo': HTMLStencilTodoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'stencil-todo': JSXElements.StencilTodoAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilTodoAttributes extends HTMLAttributes {
      'name'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;