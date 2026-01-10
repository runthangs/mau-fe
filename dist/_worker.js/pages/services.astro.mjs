globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Bnsn6rJt.mjs';
import { $ as $$Layout } from '../chunks/Layout_CHa28reb.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DmkUz6xk.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const plannedServices = [
    {
      title: "Daily Prayers & Jumu'ah",
      description: "Five daily congregational prayers and Friday Jumu'ah service in a peaceful, clean environment for men and women.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      image: "/images/03-mau-interior-prayer-hall-v2.png",
      category: "worship"
    },
    {
      title: "Quran & Islamic Education",
      description: "Supporting future hafiz and lifelong learning through our Madrasah, Quran memorisation programs, and adult classes.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      image: "/images/07-mau-interior-classroom.png",
      category: "education"
    },
    {
      title: "Youth Spaces",
      description: "Gaming rooms, mentoring programmes, and fun, safe activities designed to give young people a place to hang out and grow.",
      icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      image: "/images/12-mau-interior-youth-zone.png",
      category: "youth"
    },
    {
      title: "Health & Fitness",
      description: "A private, fully equipped gym promoting healthy living and physical wellbeing for the whole community.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      image: "/images/05-mau-interior-gym.png",
      category: "facilities"
    },
    {
      title: "Sports Hall",
      description: "Encouraging healthy living for all with a multi-purpose sports facility for basketball, badminton, and community activities.",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      image: "/images/mau-interior-sports-hall.png",
      category: "facilities"
    },
    {
      title: "Nursery",
      description: "A caring early-learning space for young children, nurturing their development in a safe Islamic environment.",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      image: "/images/02-mau-interior-corridor-nursery-v2.png",
      category: "education"
    },
    {
      title: "Digital Library & Study Rooms",
      description: "Quiet, useful spaces for students and readers with modern technology and resources for learning.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      image: "/images/11-mau-interior-library.png",
      category: "education"
    },
    {
      title: "Elderly Social Areas",
      description: "Warm, welcoming places for our elders to connect, relax, and participate in community life.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      image: "/images/14-mau-interior-elderly-lounge.png",
      category: "community"
    },
    {
      title: "The Peace Garden",
      description: "A calm refuge for moments of reflection, gratitude, and peace amidst the busy world.",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
      image: "/images/10-mau-interior-peace-garden.png",
      category: "facilities"
    },
    {
      title: "Charity Office",
      description: "Through Ar-Rahmah Trust, offering help to those in need and building sustainable income streams for the community.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      image: "/images/mau-frontage-right.png",
      category: "community"
    },
    {
      title: "Food Bank",
      description: "Helping the homeless and anyone struggling in Watford with essential food supplies and support.",
      icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z",
      image: "/images/09-mau-interior-kitchen-food-bank.png",
      category: "community"
    },
    {
      title: "Mortuary Services",
      description: "Supporting families during difficult times with dignified Janazah arrangements and bereavement counseling.",
      icon: "M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z",
      image: "/images/06-mau-interior-wudu.png",
      category: "community"
    },
    {
      title: "Marriage Services",
      description: "Nikah ceremonies and pre-marital counseling to support couples in building strong, faith-centered families.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      image: "/images/13-mau-interior-marriage-office.png",
      category: "community"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services", "description": "Discover the comprehensive services Masjid Al Ummah will offer - from daily prayers to youth programs, education, and community support." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="bg-primary/10 py-20"> <div class="container mx-auto px-4 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-dark mb-6">Our Services</h1> <p class="text-lg text-gray-600 max-w-2xl mx-auto">\nServing the spiritual, social, and educational needs of the Watford community with a comprehensive range of facilities and programs.\n</p> </div> </div>  <section class="py-16"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-dark mb-4">Planned Facilities & Services</h2> <p class="text-gray-600 max-w-2xl mx-auto">Everything the new Masjid Al Ummah will offer to serve our growing community.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ', ' </div> </div> </section>  <section class="py-16 bg-secondary"> <div class="container mx-auto px-4"> <div class="text-center mb-10"> <h2 class="text-3xl font-bold text-dark mb-4">Follow Us on Instagram</h2> <p class="text-gray-600">Stay connected with our community updates and events</p> <a href="https://www.instagram.com/masjid_al_ummah" target="_blank" class="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:text-accent transition-colors">\n@masjid_al_ummah\n<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> <!-- Elfsight Instagram Widget - Free Alternative to Smash Balloon --> <div class="max-w-5xl mx-auto"> <script src="https://static.elfsight.com/platform/platform.js" async><\/script> <div class="elfsight-app-lazy" data-elfsight-app-lazy data-app-id="instagram-feed" data-user="masjid_al_ummah"></div> <!-- Fallback: Static Instagram-style grid linking to actual posts --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4" id="instagram-fallback"> <a href="https://www.instagram.com/masjid_al_ummah" target="_blank" class="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative"> <img src="/images/mau-frontage-right.png" alt="Instagram Post" class="w-full h-full object-cover group-hover:scale-105 transition-transform"> <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"> <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> </div> </a> <a href="https://www.instagram.com/masjid_al_ummah" target="_blank" class="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative"> <img src="/images/01-mau-interior-foyer-cafe-v2.png" alt="Instagram Post" class="w-full h-full object-cover group-hover:scale-105 transition-transform"> <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"> <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> </div> </a> <a href="https://www.instagram.com/masjid_al_ummah" target="_blank" class="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative"> <img src="/images/03-mau-interior-prayer-hall-v2.png" alt="Instagram Post" class="w-full h-full object-cover group-hover:scale-105 transition-transform"> <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"> <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> </div> </a> <a href="https://www.instagram.com/masjid_al_ummah" target="_blank" class="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative"> <img src="/images/10-mau-interior-peace-garden.png" alt="Instagram Post" class="w-full h-full object-cover group-hover:scale-105 transition-transform"> <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"> <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg> </div> </a> </div> </div> </div> </section> <section class="py-16 bg-dark text-white text-center"> <div class="container mx-auto px-4"> <h2 class="text-3xl font-bold mb-6">Need a specific service?</h2> <p class="text-gray-300 mb-8 max-w-xl mx-auto">\nIf you have a specific request or need assistance with something not listed here, please get in touch with our team.\n</p> <a href="/contact" class="btn-primary">Contact Us</a> </div> </section> '])), maybeRenderHead(), plannedServices.map((service) => renderTemplate`<div class="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"> <div class="relative h-48 overflow-hidden"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div> <div class="absolute bottom-4 left-4"> <span class="inline-block px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full capitalize"> ${service.category} </span> </div> </div> <div class="p-6"> <div class="flex items-start gap-4"> <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(service.icon, "d")}></path> </svg> </div> <div> <h3 class="text-lg font-bold text-dark mb-2">${service.title}</h3> <p class="text-gray-600 text-sm leading-relaxed"> ${service.description} </p> </div> </div> </div> </div>`)) })}`;
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
