globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                   */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Bnsn6rJt.mjs';
import { $ as $$Layout } from '../chunks/Layout_D4i181KZ.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DmkUz6xk.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Updates = createComponent(($$result, $$props, $$slots) => {
  const updates = [
    {
      date: "December 2025",
      title: "Issue 07: Planning Update",
      description: "Step by step - building with purpose. Update on planning progress, highways approval, and bat surveys.",
      image: "/images/newsletters/mau-newsletter-2025-12-issue-07.jpg",
      tags: ["Newsletter", "Planning"]
    },
    {
      date: "December 2025",
      title: "Giving Tuesday Leaderboard",
      description: "A huge thank you to our supporters. We reached the top of the Giving Tuesday leaderboard!",
      image: "/images/newsletters/mau-newsletter-2025-12-giving-tuesday.jpg",
      tags: ["Fundraising"]
    },
    {
      date: "November 2025",
      title: "Planning Application Submitted",
      description: "A major milestone reached. We have officially submitted our planning application for the new Masjid Al Ummah.",
      image: "/images/newsletters/mau-newsletter-2025-11-planning-submitted.jpg",
      tags: ["Milestone", "Planning"]
    },
    {
      date: "November 2025",
      title: "Nascot Residents Association AGM",
      description: "Engaging with our neighbours. We were invited to present our eco-friendly design and community plans.",
      image: "/images/newsletters/mau-newsletter-2025-11-planning-update.jpg",
      tags: ["Community", "Engagement"]
    },
    {
      date: "September 2025",
      title: "Issue 06: Community BBQ Success",
      description: "Recap of our August event which drew 300 enthusiastic visitors to the site.",
      image: "/images/newsletters/mau-newsletter-2025-09-issue-06-recap.jpg",
      tags: ["Newsletter", "Event Recap"]
    },
    {
      date: "August 2025",
      title: "Community Open Day & BBQ",
      description: "Inviting the community to review plans, share feedback, and enjoy a summer BBQ.",
      image: "/images/newsletters/mau-newsletter-2025-08-issue-05-invite.jpg",
      tags: ["Event", "Community"]
    },
    {
      date: "June 2025",
      title: "Issue 04: The Story of Hajj",
      description: "Reflecting on the legacy of faith and sacrifice during the blessed month of Dhul-Hijjah.",
      image: "/images/newsletters/mau-newsletter-2025-06-issue-04.jpg",
      tags: ["Newsletter", "Faith"]
    },
    {
      date: "June 2025",
      title: "Eid Al-Adha Mubarak",
      description: "Wishing our community health, happiness and imaan on this blessed occasion.",
      image: "/images/newsletters/mau-newsletter-2025-06-eid-al-adha.jpg",
      tags: ["Holiday"]
    },
    {
      date: "May 2025",
      title: "Open Day Recap",
      description: "Highlights from our April Open Day: 250 attendees and incredible support from the community.",
      image: "/images/newsletters/mau-newsletter-2025-05-open-day-recap.jpg",
      tags: ["Event Recap"]
    },
    {
      date: "April 2025",
      title: "Open Day Invitation",
      description: "Come and explore the space before transformation begins. Join us at 68 Langley Road.",
      image: "/images/newsletters/mau-newsletter-2025-04-open-day-invite.jpg",
      tags: ["Event"]
    },
    {
      date: "April 2025",
      title: "Flash Update 01",
      description: "Masjid and Musallah collections update. \xA339k collected thanks to the generosity of the Ummah.",
      image: "/images/newsletters/mau-newsletter-2025-04-flash-update-01.jpg",
      tags: ["Fundraising"]
    },
    {
      date: "April 2025",
      title: "Issue 02: Inside View",
      description: "Eid Mubarak messages and community views from our trustees.",
      image: "/images/newsletters/mau-newsletter-2025-04-issue-02.jpg",
      tags: ["Newsletter"]
    },
    {
      date: "March 2025",
      title: "Issue 01: Welcome",
      description: "Our first newsletter. Sharing our vision during the blessed month of Ramadan.",
      image: "/images/newsletters/mau-newsletter-2025-03-issue-01.jpg",
      tags: ["Newsletter", "Launch"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Updates", "description": "Follow the journey of Masjid Al Ummah. Newsletters, planning updates, and community events." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="bg-dark text-white py-20"> <div class="container mx-auto px-4 text-center"> <h1 class="text-5xl font-bold mb-6 text-white">Project Updates</h1> <p class="text-xl text-gray-300 max-w-2xl mx-auto">\nFollow our journey as we build Masjid Al Ummah. From planning milestones to community gatherings.\n</p> </div> </div> <section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <div class="max-w-5xl mx-auto"> <div class="relative border-l-2 border-primary/30 ml-3 md:ml-0 space-y-12 md:space-y-0"> ', ` </div> </div> </div> </section>  <div id="lightbox" class="fixed inset-0 bg-black/95 z-[60] hidden items-center justify-center p-4 opacity-0 transition-opacity duration-300" onclick="closeLightbox()"> <button class="absolute top-4 right-4 text-white/80 hover:text-white text-4xl focus:outline-none z-50 p-2" onclick="closeLightbox()">&times;</button> <div class="relative max-w-5xl max-h-screen w-full h-full flex items-center justify-center"> <img id="lightbox-img" src="" alt="" class="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl transform scale-95 transition-transform duration-300" onclick="event.stopPropagation()"> </div> </div> <script>
    function openLightbox(src, alt) {
      const lightbox = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');

      img.src = src;
      img.alt = alt;

      lightbox.classList.remove('hidden');
      // Small delay to allow display:block to apply before changing opacity for fade effect
      setTimeout(() => {
        lightbox.classList.remove('opacity-0');
        img.classList.remove('scale-95');
        img.classList.add('scale-100');
      }, 10);

      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');

      lightbox.classList.add('opacity-0');
      img.classList.remove('scale-100');
      img.classList.add('scale-95');

      setTimeout(() => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  <\/script> `])), maybeRenderHead(), updates.map((update, index) => renderTemplate`<div${addAttribute(`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`, "class")}> <!-- Timeline Dot --> <div class="absolute left-[-5px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm mt-6"></div> <!-- Content Card --> <div${addAttribute(`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`, "class")}> <div class="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"${addAttribute(`openLightbox('${update.image}', '${update.title}')`, "onclick")}> <div class="h-48 overflow-hidden relative"> <div class="absolute top-4 left-4 z-10"> <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"> ${update.date} </span> </div> <img${addAttribute(update.image, "src")}${addAttribute(update.title, "alt")} class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"> <span class="bg-white/90 text-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">View Update</span> </div> </div> <div class="p-6"> <div class="flex gap-2 mb-3"> ${update.tags.map((tag) => renderTemplate`<span class="text-xs font-semibold text-primary/80 bg-primary/5 px-2 py-1 rounded">${tag}</span>`)} </div> <h3 class="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">${update.title}</h3> <p class="text-gray-600 text-sm leading-relaxed"> ${update.description} </p> </div> </div> </div> <!-- Empty space for the other side of the timeline on desktop --> <div class="hidden md:block md:w-1/2"></div> </div>`)) })}`;
}, "C:/Users/kashi/Documents/mau-fe/src/pages/updates.astro", void 0);

const $$file = "C:/Users/kashi/Documents/mau-fe/src/pages/updates.astro";
const $$url = "/updates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Updates,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
