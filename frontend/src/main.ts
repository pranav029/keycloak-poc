import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/config/app.config';
import {AppComponent} from './app/app.component';

fetch('/assets/config.json')
  .then(res => res.json())
  .then(config => {
    (window as any).__env = config;
    console.log(config)
    bootstrapApplication(AppComponent, {
      ...appConfig,
      providers: [
        ...appConfig.providers || [],
        {provide: 'APP_CONFIG', useValue: config}
      ]
    })
      .catch((err) => console.error(err));
  });
