"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section"),
    );

    const cardSelector =
      ":scope .card, :scope article, :scope [data-reveal-card], :scope .grid > div, :scope .grid > a";

    const revealItems: HTMLElement[] = [];

    sections.forEach((section) => {
      section.dataset.reveal = "section";
      revealItems.push(section);

      const cards = Array.from(
        section.querySelectorAll<HTMLElement>(cardSelector),
      ).filter((node) => !node.hasAttribute("data-reveal-ignore"));

      cards.forEach((card, index) => {
        card.dataset.reveal = "card";
        card.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
        revealItems.push(card);
      });
    });

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}
