globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Bnsn6rJt.mjs';
import { $ as $$Layout } from '../chunks/Layout_CHa28reb.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DmkUz6xk.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const renderings = [
    { src: "/images/renderings/mau-rendering-hero.jpg", alt: "Future Vision: Exterior" },
    { src: "/images/mau-interior-foyer-cafe.png", alt: "Community Caf\xE9 & Foyer" },
    { src: "/images/mau-interior-prayer-hall.png", alt: "Main Prayer Hall" },
    { src: "/images/mau-interior-sports-hall.png", alt: "Sports Hall" },
    { src: "/images/mau-interior-gym.png", alt: "Fitness Suite" },
    { src: "/images/mau-interior-womens-prayer.png", alt: "Women's Prayer Space" },
    { src: "/images/mau-interior-classroom.png", alt: "Education & Classroom" },
    { src: "/images/mau-interior-kitchen.png", alt: "Community Kitchen" },
    { src: "/images/mau-interior-corridor-nursery.png", alt: "Corridor & Nursery" },
    { src: "/images/mau-interior-wudu.png", alt: "Wudu Facilities" },
    { src: "/images/mau-wide-elevations-plans.jpg", alt: "Architectural Masterplan" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Project" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="bg-dark text-white py-20"> <div class="container mx-auto px-4 text-center"> <h1 class="text-5xl font-bold mb-6 text-white">The New Masjid Al Ummah</h1> <p class="text-xl text-gray-300 max-w-2xl mx-auto">
A landmark project for Watford. Designed to be a sustainable, inclusive, and inspiring space for generations to come.
</p> </div> </div> <section class="py-16"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto mb-16"> <h2 class="text-3xl font-bold text-dark mb-6">Vision & Design</h2> <p class="text-gray-600 mb-6 text-lg leading-relaxed">
The new Masjid Al Ummah is more than just a building; it's a statement of our commitment to the future. The architectural design blends modern British aesthetics with subtle Islamic geometry, creating a building that is both distinctively Muslim and harmoniously local.
</p> <p class="text-gray-600 mb-6 text-lg leading-relaxed">
Key features include:
</p> <ul class="list-disc list-inside space-y-2 text-gray-600 mb-8 ml-4"> <li>dedicated youth center and creative studio</li> <li>Multi-purpose community hall for events and sports</li> <li>Eco-friendly construction with solar energy and rain harvesting</li> <li>Open library and co-working spaces for students and professionals</li> <li>Fully accessible facilities for the elderly and disabled</li> </ul> </div> <!-- Gallery Grid --> <h2 class="text-3xl font-bold text-dark mb-10 text-center">Project Renderings</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> `, ` </div> </div> </section>  <section class="py-16 bg-secondary"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold text-dark mb-10 text-center">Project Timeline</h2> <div class="max-w-5xl mx-auto"> <img src="/images/mau-timeline.png" alt="Masjid Al Ummah Project Timeline" class="w-full rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow" onclick="openLightbox(this.src, this.alt)"> </div> </div> </section>  <div id="lightbox" class="fixed inset-0 bg-black/90 z-50 hidden items-center justify-center p-4" onclick="closeLightbox()"> <button class="absolute top-4 right-4 text-white text-4xl hover:text-gray-300" onclick="closeLightbox()">&times;</button> <img id="lightbox-img" src="" alt="" class="max-w-full max-h-full object-contain rounded-lg" onclick="event.stopPropagation()"> </div> <script>
    function openLightbox(src, alt) {
      const lightbox = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');
      img.src = src;
      img.alt = alt;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  <\/script> `])), maybeRenderHead(), renderings.map((img) => renderTemplate`<div class="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] cursor-pointer"${addAttribute(`openLightbox('${img.src}', '${img.alt}')`, "onclick")}> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"> <span class="text-white font-medium text-lg">${img.alt}</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path> </svg> </div> </div>`)) })}`;
}, "C:/Users/kashi/Documents/mau-fe/src/pages/project.astro", void 0);

const $$file = "C:/Users/kashi/Documents/mau-fe/src/pages/project.astro";
const $$url = "/project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Project,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
