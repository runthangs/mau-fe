globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Cq3kh8DP.mjs';
import { $ as $$Layout } from '../chunks/Layout_BkFr4NDu.mjs';
import { a as reactExports } from '../chunks/_@astro-renderers_VE_s814c.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_VE_s814c.mjs';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const PrayerTimes = () => {
  const [prayers, setPrayers] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const PRAYER_NAMES = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  reactExports.useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const date = /* @__PURE__ */ new Date();
        const timestamp = Math.floor(date.getTime() / 1e3);
        const lat = 51.6565;
        const lng = -0.3903;
        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${lat}&longitude=${lng}&method=2&school=1`
        );
        if (!response.ok) throw new Error("Failed to fetch prayer times");
        const data = await response.json();
        const timings = data.data.timings;
        setPrayers(timings);
        setLoading(false);
      } catch (err) {
        setError("Unable to load prayer times");
        setLoading(false);
      }
    };
    fetchPrayerTimes();
    const interval = setInterval(fetchPrayerTimes, 6e4);
    return () => clearInterval(interval);
  }, []);
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center text-gray-500", children: "Loading prayer times..." });
  if (error) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 text-center text-red-500", children: error });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary px-6 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-white text-lg font-bold flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Prayer Times" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal bg-white/20 px-2 py-1 rounded", children: "Watford" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-50 text-xs mt-1", children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-gray-100", children: [
      PRAYER_NAMES.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center px-6 py-3 hover:bg-gray-50 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-text", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: prayers[name] })
      ] }, name)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center px-6 py-3 bg-secondary/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-text text-sm", children: "Jumu'ah" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary text-sm", children: "1:15 PM" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 bg-gray-50 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/prayer-times", className: "text-xs text-gray-500 hover:text-primary underline", children: "View full timetable" }) })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden"> <div class="absolute inset-0 z-0"> <div class="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 z-10"></div> <img src="/images/renderings/mau-rendering-hero.jpg" alt="Masjid Al Ummah New Building" class="w-full h-full object-cover" onerror="this.style.display='none'"> <div class="absolute inset-0 bg-dark/20 z-0"></div> <!-- Fallback if image fails --> </div> <div class="container mx-auto px-4 z-20 relative text-center md:text-left"> <div class="flex flex-col md:flex-row items-center justify-between"> <div class="md:w-2/3 mb-10 md:mb-0"> <span class="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-50 border border-primary/30 text-sm font-semibold mb-6 backdrop-blur-sm">
Building Tomorrow's Ummah
</span> <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
The Heart of <span class="text-primary">Watford</span> </h1> <p class="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
A next-generation masjid and community hub where every generation prays, learns, creates, and leads.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"> <a href="/project" class="btn-primary text-center">
View The Project
</a> <a href="/contact" class="px-6 py-3 bg-white text-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md text-center">
Get Involved
</a> </div> </div> <div class="md:w-1/3 w-full max-w-sm"> ${renderComponent($$result2, "PrayerTimes", PrayerTimes, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/dad/Documents/mau-fe/src/components/PrayerTimes.jsx", "client:component-export": "default" })} </div> </div> </div> </section>  <section class="py-8 bg-gradient-to-r from-primary to-accent"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-white mb-4"> <div class="text-center md:text-left"> <h3 class="text-2xl font-bold mb-1">Building Fund Progress</h3> <p class="text-primary-50 text-sm">Revive. Rebuild. Reimagine.</p> </div> <div class="flex items-center gap-8 text-center"> <div> <span class="block text-3xl font-bold">£520K</span> <span class="text-xs uppercase tracking-wide opacity-80">Raised</span> </div> <div class="text-4xl font-light opacity-50">/</div> <div> <span class="block text-3xl font-bold">£4M</span> <span class="text-xs uppercase tracking-wide opacity-80">Goal</span> </div> </div> </div> <div class="relative"> <div class="h-4 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"> <div class="h-full bg-white rounded-full transition-all duration-1000 ease-out" style="width: 13%"></div> </div> <div class="flex justify-between mt-2 text-sm text-primary-50"> <span>13% Complete</span> <a href="https://masjidalummah.org/donate" target="_blank" class="font-semibold hover:text-white transition-colors flex items-center gap-1">
Donate Now
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> </div> </div> </div> </section>  <section class="py-20 bg-secondary"> <div class="container mx-auto px-4"> <div class="flex flex-col md:flex-row items-center gap-16"> <div class="md:w-1/2"> <h2 class="text-accent text-sm font-bold uppercase tracking-widest mb-2">Who We Are</h2> <h3 class="text-4xl font-bold text-dark mb-6">More Than Just a Mosque</h3> <p class="text-gray-600 mb-6 text-lg">
Masjid Al Ummah is Watford's next-generation masjid and community hub for youth and families. We are returning to the original mosque's role as a center for worship, learning, social support, and civic engagement.
</p> <p class="text-gray-600 mb-8">
Designed for the digital age, this is a place where every member—especially our youth—can worship, create, collaborate, and shape the future.
</p> <a href="/about" class="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
Read our full story
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> <div class="md:w-1/2 grid grid-cols-2 gap-4"> <img src="/images/renderings/mau-rendering-cam-03.jpg" alt="New Masjid Interior Rendering" class="rounded-2xl shadow-lg w-full h-64 object-cover"> <div class="bg-primary rounded-2xl p-8 flex items-center justify-center text-white text-center shadow-lg h-64"> <div> <span class="block text-5xl font-bold mb-2">15K+</span> <span class="text-sm uppercase tracking-wide opacity-90">Muslims in Watford</span> </div> </div> <div class="bg-accent rounded-2xl p-6 flex items-center justify-center text-white text-center shadow-lg h-64"> <div> <span class="block text-4xl font-bold mb-2">30,000</span> <span class="text-sm uppercase tracking-wide opacity-90">Sq Ft New Facility</span> </div> </div> <img src="/images/renderings/mau-rendering-cam-04.jpg" alt="New Masjid Exterior Rendering" class="rounded-2xl shadow-lg w-full h-64 object-cover"> </div> </div> </div> </section>  <section class="py-20 bg-white"> <div class="container mx-auto px-4"> <div class="text-center max-w-3xl mx-auto mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-dark mb-4">Our Core Values</h2> <p class="text-gray-600">Built on a foundation of faith, service, and community growth.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${[
    {
      title: "Youth Leadership",
      desc: "Empowering the next generation with Quran-based leadership skills and a platform for their voice.",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    },
    {
      title: "Community Hub",
      desc: "A safe space for open dialogue, social support, and civic engagement for all families.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Digital & Creative",
      desc: "Merging tradition with innovation through digital literacy, coding, and creative arts.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  ].map((feature) => renderTemplate`<div class="p-8 rounded-2xl bg-secondary/50 border border-secondary hover:shadow-xl transition-all duration-300 group"> <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(feature.icon, "d")}></path> </svg> </div> <h3 class="text-xl font-bold text-dark mb-3">${feature.title}</h3> <p class="text-gray-600 leading-relaxed">${feature.desc}</p> </div>`)} </div> </div> </section>  <section class="py-16 bg-dark text-white"> <div class="container mx-auto px-4 text-center max-w-3xl"> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-6 text-primary opacity-80" fill="currentColor" viewBox="0 0 24 24"> <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path> </svg> <blockquote class="text-xl md:text-2xl font-light italic mb-6 leading-relaxed">
"Whoever builds a masjid for the sake of Allah... Allah will build for him something like it in Paradise."
</blockquote> <cite class="text-primary-50 text-sm">— Sahih Al-Bukhari</cite> </div> </section>  <section class="py-24 bg-primary relative overflow-hidden"> <div class="absolute inset-0 opacity-10"> <svg class="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none"> <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path> </svg> </div> <div class="container mx-auto px-4 relative z-10 text-center text-white"> <h2 class="text-4xl md:text-5xl font-bold mb-6">Help Us Build The Future</h2> <p class="text-xl text-primary-50 mb-10 max-w-2xl mx-auto">
Join us in constructing a beacon of light for Watford. Your support makes this vision a reality.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="https://masjidalummah.org/donate" target="_blank" class="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1">
Donate Now
</a> <a href="/contact" class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
Volunteer With Us
</a> </div> </div> </section> ` })}`;
}, "C:/Users/dad/Documents/mau-fe/src/pages/index.astro", void 0);

const $$file = "C:/Users/dad/Documents/mau-fe/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
