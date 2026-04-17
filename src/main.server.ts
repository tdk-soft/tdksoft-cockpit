import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

/**
 * Server-side bootstrap function.
 * Angular injects the BootstrapContext automatically.
 */
export default function bootstrap(context: any) {
  return bootstrapApplication(AppComponent, config, context);
}