globalThis.process ??= {}; globalThis.process.env ??= {};
import { p as decodeKey } from './chunks/astro/server_Cq3kh8DP.mjs';
import './chunks/astro-designed-error-pages_CFDc0msk.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DS9PA_ib.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/dad/Documents/mau-fe/","cacheDir":"file:///C:/Users/dad/Documents/mau-fe/node_modules/.astro/","outDir":"file:///C:/Users/dad/Documents/mau-fe/dist/","srcDir":"file:///C:/Users/dad/Documents/mau-fe/src/","publicDir":"file:///C:/Users/dad/Documents/mau-fe/public/","buildClientDir":"file:///C:/Users/dad/Documents/mau-fe/dist/","buildServerDir":"file:///C:/Users/dad/Documents/mau-fe/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.YnYL_moo.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.YnYL_moo.css"}],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.YnYL_moo.css"}],"routeData":{"route":"/project","isIndex":false,"type":"page","pattern":"^\\/project\\/?$","segments":[[{"content":"project","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/project.astro","pathname":"/project","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.YnYL_moo.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.YnYL_moo.css"}],"routeData":{"route":"/updates","isIndex":false,"type":"page","pattern":"^\\/updates\\/?$","segments":[[{"content":"updates","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/updates.astro","pathname":"/updates","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.YnYL_moo.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/dad/Documents/mau-fe/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/dad/Documents/mau-fe/src/pages/events.astro",{"propagation":"none","containsHead":true}],["C:/Users/dad/Documents/mau-fe/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/dad/Documents/mau-fe/src/pages/project.astro",{"propagation":"none","containsHead":true}],["C:/Users/dad/Documents/mau-fe/src/pages/services.astro",{"propagation":"none","containsHead":true}],["C:/Users/dad/Documents/mau-fe/src/pages/updates.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/events@_@astro":"pages/events.astro.mjs","\u0000@astro-page:src/pages/project@_@astro":"pages/project.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/updates@_@astro":"pages/updates.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D59gMcmK.mjs","C:/Users/dad/Documents/mau-fe/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:/Users/dad/Documents/mau-fe/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DfJ7cZEP.mjs","C:/Users/dad/Documents/mau-fe/src/components/PrayerTimes.jsx":"_astro/PrayerTimes.C3DQ7y7y.js","@astrojs/react/client.js":"_astro/client.9unXo8s5.js","C:/Users/dad/Documents/mau-fe/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.Cxod2H4N.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/dad/Documents/mau-fe/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"contact-form\"),e=document.getElementById(\"form-status\"),s=document.getElementById(\"submit-btn\");t?.addEventListener(\"submit\",async a=>{if(a.preventDefault(),!e||!s)return;e.classList.add(\"hidden\"),e.className=\"hidden p-4 rounded-lg\",s.disabled=!0,s.innerText=\"Sending...\";const o=new FormData(t),d=Object.fromEntries(o.entries());try{const r=await(await fetch(\"https://mau-be.cloudflare-mau.workers.dev\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(d)})).json();if(e.classList.remove(\"hidden\"),r.success)e.classList.add(\"bg-green-100\",\"text-green-700\"),e.innerText=\"Thank you! Your message has been sent successfully.\",t.reset();else throw new Error(r.error||\"Failed to send message\")}catch(n){e.classList.remove(\"hidden\"),e.classList.add(\"bg-red-100\",\"text-red-700\"),e.innerText=\"Sorry, there was an error sending your message. Please try again later.\",console.error(\"Submission error:\",n)}finally{s.disabled=!1,s.innerText=\"Send Message\"}});"]],"assets":["/_astro/contact.YnYL_moo.css","/_astro/client.9unXo8s5.js","/_astro/index.WFquGv8Z.js","/_astro/PrayerTimes.C3DQ7y7y.js","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/images/renderings/mau-rendering-cam-03.jpg","/images/renderings/mau-rendering-cam-04.jpg","/images/renderings/mau-rendering-cam-06.jpg","/images/renderings/mau-rendering-hero.jpg","/images/logo/logo.mp4","/images/logo/mau-icon-green.svg","/images/logo/mau-logo-horizontal.svg","/images/logo/mau-logo-white-stacked.svg","/_worker.js/pages/contact.astro.mjs","/_worker.js/pages/events.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/project.astro.mjs","/_worker.js/pages/services.astro.mjs","/_worker.js/pages/updates.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/chunks/astro-designed-error-pages_CFDc0msk.mjs","/_worker.js/chunks/astro_C9kcu-Qm.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/image-endpoint_Dn38gIL0.mjs","/_worker.js/chunks/index_BjQAbIeX.mjs","/_worker.js/chunks/Layout_BkFr4NDu.mjs","/_worker.js/chunks/noop-middleware_DS9PA_ib.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_CrdlObHx.mjs","/_worker.js/chunks/sharp_DfJ7cZEP.mjs","/_worker.js/chunks/_@astro-renderers_VE_s814c.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_D60Y0JMC.mjs","/_worker.js/_astro/contact.YnYL_moo.css","/_worker.js/chunks/astro/server_Cq3kh8DP.mjs"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"SnNUhHOgHSo24o2oZZKsfSF0iXJlCKgjmwpkxXiCRBw=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
