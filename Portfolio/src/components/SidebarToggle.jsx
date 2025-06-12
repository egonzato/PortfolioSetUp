'use client';

import React, { useState } from 'react';

export default function SidebarToggle({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-md md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <nav
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-60 p-6 transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:flex md:flex-col md:justify-start md:gap-4`}
      >
        <ul className="flex flex-col gap-4 mt-16">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="hover:underline text-base block"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
