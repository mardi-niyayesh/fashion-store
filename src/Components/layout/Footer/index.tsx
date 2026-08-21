"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/Components/Container";

import { Phone, MapPin, Heart } from "lucide-react";
import { FaTelegram, FaLinkedinIn, FaGithub } from "react-icons/fa";

import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[var(--card)]
        text-[var(--foreground)]
        py-16
        transition-colors
        duration-300
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
          bg-[var(--primary)]
          opacity-10
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
          bg-[var(--primary)]
          opacity-10
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
              text-[var(--muted-foreground)]
              transition-colors
              duration-300
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
                text-[var(--foreground)]
                transition-colors
                duration-300
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

              <ContactItem
                icon={FaTelegram}
                text="chanel Telegram"
                href="https://t.me/duonex_dev"
              />

              <ContactItem
                icon={FaLinkedinIn}
                text="LinkedIn"
                href="https://www.linkedin.com/in/niyayesh-mardi/"
              />
            </div>
          </div>

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
        </div>
      </Container>
      <div
        className="
          relative
          mx-auto
          mt-12
          border-t
          border-[var(--border)]
          pt-6
          text-center
          text-sm
          text-[var(--muted-foreground)]
          transition-colors
          duration-300
        "
      >
        <div className="flex items-center justify-center gap-1.5">
          <span>ساخته شده با</span>

          <Heart
            size={16}
            strokeWidth={2}
            className="
              fill-[var(--primary)]
              text-[var(--primary)]
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
          text-[var(--foreground)]
          transition-colors
          duration-300
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
          text-[var(--muted-foreground)]
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
                hover:text-[var(--primary)]
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
          border-[var(--border)]
          bg-[var(--muted)]
          transition-all
          duration-300
          group-hover:border-[var(--primary)]
          group-hover:bg-[var(--primary)]
        "
      >
        <Icon
          className="
            h-5
            w-5
            text-[var(--primary)]
            transition-colors
            duration-300
            group-hover:text-[var(--primary-foreground)]
          "
        />
      </div>

      <p
        className="
          max-w-45
          text-sm
          leading-7
          text-[var(--muted-foreground)]
          transition-colors
          duration-300
          group-hover:text-[var(--primary)]
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
