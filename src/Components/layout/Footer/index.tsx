"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/Components/Container";

import { Phone, MapPin, LucideIcon, Heart } from "lucide-react";

import { FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-pink-50
        py-16
      "
    >
      <div
        className="
          absolute
          -left-20
          top-0
          h-72
          w-72
          rounded-full
          bg-pink-200/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-20
          bottom-0
          h-72
          w-72
          rounded-full
          bg-rose-200/30
          blur-3xl
        "
      />

      <Container
        className="
          relative
          flex
          flex-col
          gap-12
          lg:flex-row
          lg:justify-between
        "
      >
        <div
          className="
            max-w-105
            text-center
            lg:text-right
          "
        >
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/imgs/logo.jpg"
              alt="لوگوی فروشگاه"
              width={150}
              height={100}
              sizes="(max-width: 768px) 100px, 190px"
              className="
                h-25
                w-25
                rounded-full
                object-cover
                lg:h-47.5
                lg:w-47.5
              "
            />
          </div>

          <p
            className="
              mt-4
              leading-8
              text-slate-600
            "
          >
            جدیدترین و باکیفیت‌ترین محصولات پوشاک را برای ساختن استایلی خاص و
            متفاوت در کنار شما فراهم کرده‌ایم.
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-2
            gap-x-12
            gap-y-10
            sm:grid-cols-3
          "
        >
          <FooterMenu
            title="دسترسی سریع"
            items={[
              {
                title: "محصولات",
                href: "/products",
              },
              {
                title: "درباره ما",
                href: "/about",
              },
            ]}
          />

          <FooterMenu
            title="راهنما"
            items={[
              {
                title: "تماس با ما",
                href: "/Contact",
              },
              {
                title: "سوالات متداول",
                href: "/question",
              },
            ]}
          />

          <div
            className="
              col-span-2
              sm:col-span-1
            "
          >
            <h3
              className="
                mb-6
                text-lg
                font-black
                text-slate-900
              "
            >
              ارتباط با من
            </h3>

            <div className="flex flex-col gap-4">
              <ContactItem
                icon={Phone}
                text="09945812125"
                href="tel:09945812125"
              />

              <ContactItem icon={MapPin} text="ایران، تهران" />

              <ContactItem
                icon={FaGithub}
                text="GitHub"
                href="https://github.com/mardi-niyayesh"
                external
              />
            </div>
          </div>
        </div>
      </Container>

      <div
        className="
          relative
          mx-auto
          mt-12
          border-t
          border-slate-200
          pt-6
          text-center
          text-sm
          text-slate-500
        "
      >
        <div className="flex items-center justify-center gap-1.5">
          <span>ساخته شده با</span>

          <Heart
            size={16}
            strokeWidth={2}
            className="
              fill-[#E30076]
              text-[#E30076]
            "
          />

          <span>توسط نیایش مردی</span>
        </div>
      </div>
    </footer>
  );
};

type FooterMenuItem = {
  title: string;
  href: string;
};

function FooterMenu({
  title,
  items,
}: {
  title: string;
  items: FooterMenuItem[];
}) {
  return (
    <div>
      <h3
        className="
          mb-6
          text-lg
          font-black
          text-slate-900
        "
      >
        {title}
      </h3>

      <ul
        className="
          flex
          flex-col
          gap-3
          text-sm
          font-medium
          text-slate-600
        "
      >
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="
                inline-block
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-[#E30076]
              "
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  text,
  href,
  external = false,
}: {
  icon: LucideIcon | IconType;
  text: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-2xl
          border
          border-pink-100
          bg-pink-50
          transition-all
          duration-300
          group-hover:border-pink-200
          group-hover:bg-pink-100
        "
      >
        <Icon
          className="
            h-5
            w-5
            text-[#E30076]
          "
        />
      </div>

      <p
        className="
          max-w-45
          text-sm
          leading-7
          text-slate-600
          transition-colors
          duration-300
          group-hover:text-[#E30076]
        "
      >
        {text}
      </p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={text}
        className="
          group
          flex
          items-center
          gap-3
        "
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
      "
    >
      {content}
    </div>
  );
}

export default Footer;
