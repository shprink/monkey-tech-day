import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mycomponent',
  srcDir: './src/01',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
