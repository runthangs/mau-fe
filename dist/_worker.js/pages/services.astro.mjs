globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { e as createComponent, f as createAstro } from '../chunks/astro/server_Bnsn6rJt.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DmkUz6xk.mjs';

const $$Astro = createAstro();
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return Astro2.redirect("/project#facilities");
}, "C:/Users/kashi/Documents/mau-fe/src/pages/services.astro", void 0);

const $$file = "C:/Users/kashi/Documents/mau-fe/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
