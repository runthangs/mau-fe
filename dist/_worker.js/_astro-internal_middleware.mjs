globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_VCLARsa4.mjs';
import './chunks/astro/server_Bnsn6rJt.mjs';
import { s as sequence } from './chunks/index_BrEa8eP-.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
