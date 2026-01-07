globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Cq3kh8DP.mjs';
import { $ as $$Layout } from '../chunks/Layout_BkFr4NDu.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_VE_s814c.mjs';

const $$Events = createComponent(($$result, $$props, $$slots) => {
  const events = [
    {
      title: "Community BBQ",
      date: "2025-09-28",
      time: "14:00 - 18:00",
      location: "Masjid Al Ummah Grounds",
      image: "/images/renderings/mau-rendering-cam-03.jpg",
      description: "Join us for our annual summer BBQ. Food, fun, and brotherhood for the whole family.",
      category: "Social"
    },
    {
      title: "Youth Coding Workshop",
      date: "2025-10-05",
      time: "10:00 - 13:00",
      location: "Community Hall",
      image: "/images/renderings/mau-rendering-cam-06.jpg",
      description: "An introduction to Python programming for ages 12-16. Laptops provided.",
      category: "Education"
    },
    {
      title: "Qiyam ul-Layl for Gaza",
      date: "2025-10-12",
      time: "22:00 - 01:00",
      location: "Prayer Hall",
      image: "/images/renderings/mau-rendering-cam-04.jpg",
      description: "A night of prayer and reflection. Brothers only.",
      category: "Spiritual"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Events" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-primary/5 py-20"> <div class="container mx-auto px-4 text-center"> <h1 class="text-4xl font-bold text-dark mb-6">Upcoming Events</h1> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Join us for prayer, learning, and community building.
</p> </div> </div> <section class="py-16"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${events.map((event) => renderTemplate`<div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"> <div class="h-48 overflow-hidden relative"> <img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide"> ${event.category} </div> </div> <div class="p-6"> <div class="flex items-center text-sm text-gray-500 mb-3 space-x-4"> <span class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> ${new Date(event.date).toLocaleDateString("en-GB", { month: "short", day: "numeric" })} </span> <span class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${event.time} </span> </div> <h3 class="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">${event.title}</h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2">${event.description}</p> <div class="pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${event.location} </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "C:/Users/dad/Documents/mau-fe/src/pages/events.astro", void 0);

const $$file = "C:/Users/dad/Documents/mau-fe/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
