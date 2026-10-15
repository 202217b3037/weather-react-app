import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

initializeFaro({
  url: 'https://faro-collector-prod-ap-south-1.grafana.net/collect/50df3fbd2d07154940c24e709eb0bc4c',
  app: {
    name: 'weather-app',
    version: '1.0.0',
    environment: 'production'
  },
  instrumentations: [
    ...getWebInstrumentations(),
    new TracingInstrumentation(),
  ],
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);