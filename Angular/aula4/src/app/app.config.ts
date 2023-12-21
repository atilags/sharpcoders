import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // Precisa adicionar o provideHttpClient(withFetch()), para poder fazer socilitações crud com qualquer api.
  providers: [provideRouter(routes), provideHttpClient(withFetch())]
};
