import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props }) {
    const container = document.querySelector('#app');
    // console.log('El: ', el);
    const root = createRoot(container);
    root.render(<App {...props} />);
  },
});
