globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Bnsn6rJt.mjs';
import { $ as $$Layout } from '../chunks/Layout_CHa28reb.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DmkUz6xk.mjs';

const $$Events = createComponent(($$result, $$props, $$slots) => {
  const pastEvents = [
    {
      title: "Community Open Day",
      date: "2025-10-20",
      time: "10:00 - 16:00",
      location: "Masjid Al Ummah Site",
      image: "/images/mau-frontage-right.png",
      description: "An open day for the community to view the new masjid site, architectural plans, and meet the project team. Refreshments were served.",
      category: "Open Day"
    },
    {
      title: "Fundraising Dinner",
      date: "2025-09-14",
      time: "18:00 - 22:00",
      location: "Watford Community Centre",
      image: "/images/15-mau-interior-event-hall.png",
      description: "An evening of food and fellowship to raise funds for the new masjid. Over 200 community members attended this successful fundraising event.",
      category: "Fundraising"
    },
    {
      title: "Spring Open Day",
      date: "2025-04-07",
      time: "11:00 - 15:00",
      location: "Masjid Al Ummah Site",
      image: "/images/01-mau-interior-foyer-cafe-v2.png",
      description: "Community members visited the site to see progress updates and discuss the vision for the new facility with trustees.",
      category: "Open Day"
    },
    {
      title: "Community Iftar & Fundraiser",
      date: "2025-03-23",
      time: "17:30 - 21:00",
      location: "Current Masjid",
      image: "/images/03-mau-interior-prayer-hall-v2.png",
      description: "A blessed gathering during Ramadan where the community came together for iftar and pledged support for the new masjid project.",
      category: "Fundraising"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Events" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-primary/5 py-20"> <div class="container mx-auto px-4 text-center"> <h1 class="text-4xl font-bold text-dark mb-6">Past Events</h1> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
A look back at community gatherings, open days, and fundraising events that have brought us together.
</p> </div> </div> <section class="py-16"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${pastEvents.map((event) => renderTemplate`<div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"> <div class="h-48 overflow-hidden relative"> <img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"> <div class="absolute top-4 right-4 flex flex-col gap-2 items-end"> <div class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide shadow-sm"> ${event.category} </div> <div class="bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wide shadow-sm">
Past Event
</div> </div> </div> <div class="p-6"> <div class="flex items-center text-sm text-gray-500 mb-3 space-x-4"> <span class="flex items-center font-medium text-primary"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> ${new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} </span> <span class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${event.time} </span> </div> <h3 class="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">${event.title}</h3> <p class="text-gray-600 text-sm mb-4 line-clamp-2">${event.description}</p> <div class="pt-4 border-t border-gray-100 flex items-center text-sm text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> ${event.location} </div> </div> </div>`)} </div> </div> </section> ` })}`;
}, "C:/Users/kashi/Documents/mau-fe/src/pages/events.astro", void 0);

const $$file = "C:/Users/kashi/Documents/mau-fe/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
