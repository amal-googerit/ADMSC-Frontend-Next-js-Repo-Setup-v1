'use client';

import { useState } from 'react';
import Image from 'next/image';
import { content } from './constants';

export default function HomePage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  return (
    <div className={lang === 'ar' ? 'font-arabic text-right' : 'font-sans text-left'}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-xl font-bold">{content.header.logo[lang]}</div>
        <ul className="flex gap-6">
          {Object.entries(content.header.menu).map(([key, value]) => (
            <li key={key} className="hover:text-blue-600 cursor-pointer">
              {value[lang]}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          <button
            type="button"
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="px-4 py-2 border rounded-lg bg-blue-500 text-white"
          >
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
          <button type="button" className="px-4 py-2 border rounded-lg bg-green-600 text-white">
            {content.header.cta[lang]}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${content.hero.bg})` }}
      >
        <div className="bg-black/50 p-6 rounded-xl text-white max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">{content.hero.title[lang]}</h1>
          <button type="button" className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700">
            {content.hero.button[lang]}
          </button>
        </div>
      </section>

      {/* Sports */}
      <section className="py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">{content.sports.title[lang]}</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {content.sports.items.map((sport, i) => (
            <div key={`box-${i + 1}`} className="p-4 border rounded-lg shadow hover:shadow-lg">
              <div className="text-4xl mb-2">{sport.icon}</div>
              <p>{sport[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">{content.about.title[lang]}</h2>
        <p className="max-w-3xl mx-auto">{content.about.description[lang]}</p>
      </section>

      {/* Events */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">{content.events.title[lang]}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.events.items.map((event, i) => (
            <div key={`box-${i + 1}`} className="p-4 border rounded-lg shadow">
              <Image
                width={100}
                height={100}
                src={event.image}
                alt=""
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-sm text-gray-500">{event.date}</p>
              <h3 className="font-bold mt-2">{event[lang]}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Academy */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">{content.academy.title[lang]}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.academy.items.map((course, i) => (
            <div key={`box-${i + 1}`} className="p-4 border rounded-lg shadow">
              <Image
                width={100}
                height={100}
                src={course.image}
                alt=""
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-bold">{course[lang]}</h3>
              <p>{lang === 'en' ? course.descEn : course.descAr}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">{content.partners.title[lang]}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {content.partners.logos.map((logo, i) => (
            <Image
              width={100}
              height={100}
              key={`box-${i + 1}`}
              src={logo}
              alt="Partner Logo"
              className="h-12"
            />
          ))}
        </div>
      </section>

      {/* News */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center">{content.news.title[lang]}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.news.items.map((news, i) => (
            <div key={`box-${i + 1}`} className="p-4 border rounded-lg shadow">
              <Image
                width={100}
                height={100}
                src={news.image}
                alt=""
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p>{news[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-6 text-center">
        <h3 className="text-xl font-bold mb-4">{content.footer.join[lang]}</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {Object.entries(content.footer.links).map(([key, value]) => (
            <p key={`box-${key + 1}`} className="cursor-pointer hover:underline">
              {value[lang]}
            </p>
          ))}
        </div>
        <p className="text-sm mt-6">© 2025 ADMSC</p>
      </footer>
    </div>
  );
}
