---
layout: layout.liquid
title: About this website
description: About Owen Jones' website
tags: footer
order: 3
---

This page is a broad summary of this website's technical and information architecture. Think of it as a sort of digital [colophon](<https://en.wikipedia.org/wiki/Colophon_(publishing)>).

My aim with this page is to outline technical and editorial choices for this website and why. None of these choices are set in stone and can be changed at any time, effort pending. If you think a choice I've made on this website is ill informed or that there's a better choice, please feel free to reach out.

## Guiding principles

The choices I'm about to outline follow a number of personal and professional principles.

Most of these are rooted in my own moral framework and operating a morally pure tech project in the modern day is basically impossible. Where I feel I'm not following my outlined principles, I try to make a note of it.

### Web performance and sustainability

Two intimately linked topics. I believe that websites should be as lean as possible as it leads to better user experience, reduced energy usage and cost savings for all parties. Sustainability naturally follows this. A cleaner web means a cleaner planet and a cleaner planet is better for everyone. I take a lot of pride in my [A+ Website Carbon score](https://www.websitecarbon.com/website/owenis-online/) and wish to maintain it as best I can.

It's worth noting that I consider the use of generative AI like LLMs to run counter to this principal so will avoid tools or platforms that make heavy use of or champion genAI.

### Accessibility

The web is for everyone and we have the tools available to us to make the web accessible to disabled users. I am not an accessibility specialist and haven't audited this website against [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) but I've made choices to ensure this website's accessibility as best I can, including authoring semantic HTML and checking the colour contrast of the site's styling.

### Avoiding harm to my fellow humans

What I mean by this is avoiding supporting companies or projects that do things such as:

- regularly mistreating or exploiting their employees
- discriminate against a particular group as an operational policy
- contribute towards damage to the environment
- actively support other organisations doing any of the above

## Tech

This website is built using [Eleventy](https://www.11ty.dev/) (11ty?), a static site generator. It's using Eleventy's default recommendations for languages that it processes into HTML on build: [LiquidJS](https://liquidjs.com/tutorials/intro-to-liquid.html) for templating and [Markdown](https://www.markdownguide.org/) for content.

I picked a static site generator since I'm currently not planning to use this website for anything other than flat content, in other words I'm not planning on building anything that would require server-side or client-side processing and I'm not planning on storing any information that can't be stored in markdown files in the source control of this repo. Therefore a plain HTML website that can be served from a CDN, with a little bit of post-build processing for ease, is the cheapest and most performant option. The choice to use Eleventy was out of personal preference.

I've authored the markup of this website using semantic HTML as it takes a lot of the work out of accessibility, since good semantics communicate your website to screen readers all on their own.

This website uses [Sass](https://sass-lang.com/documentation/) for CSS pre-processing. I picked Sass and more generally CSS with pre-processing rather than other approaches like plain CSS or CSS-in-JS partly out of personal preference and familiarity and partly because it means on the client-side I'm using plain CSS, which is more robust than CSS-in-JS, whilst the pre-processor means I can organise my styling code more pleasantly and lines up neatly with Eleventy's build step.

I use [prettier](https://prettier.io/) to manage this website's code quality and consistency.

I currently don't use any client side Javascript on this website, so I don't have a strategy for that. I don't have the need for any client-side functionality or rendering and make the added choice not to use it for simplicity and performance.

## Hosting

The code for this website is hosted on GitHub. [Visit this webiste's repo](https://github.com/owenwilljones/owen-website). This is a choice based on familiarity with the platform. I would like to eventually move away from GitHub based on their parent company Microsoft's strategic lean towards genAI and their involvement in military tech.

I deploy the website to [Cloudflare Pages](https://pages.cloudflare.com/) a CDN platform for static site hosting. The platform is hooked up to my website's repo so pushing to `main` automatically builds and deploys the site.

The choice to use Cloudflare was based on their [commitment to renewable energy](https://blog.cloudflare.com/cloudflare-committed-to-building-a-greener-internet/) and [anti-AI scraping policies](https://www.cloudflare.com/en-gb/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/). I am aware of their [history with hate speech-adjacent customers](https://www.fastcompany.com/90312063/how-cloudflare-straddles-its-role-as-privacy-champion-and-hate-speech-enabler) and feel that the pros outweigh the cons.

## Design

I'm far from a designer so I've kept this website's visuals as simple as possible. I've tried to focus on readability rather than visual fidelity.

The off-black body background is 10% stylistic choice, 90% sustainability and accessibility consideration as darker pixels use less power and darker, lower contrast colours tend to be easier on the eyes. The use of green links against the red header are a contrast choice to minimise the risk of colourblind users struggling to identify interactive items. The red in the header is a purely stylistic choice.

I've tried to differentiate different headings and body text by size that clearly denotes information hierarchy on pages so that readers understand the relationship between different headings and their associated content.

## Content

Content on this website is written in Markdown, which Eleventy processes into HTML which becomes available on this website as individual pages. There isn't really any rhyme or reason as to when content is published. I try to maintain a broad weekly schedule for my weeknotes but not for anything else I write.

I don't follow any content style guide when I write and typically just follow my heart with my content.

I'm at present a civil servant and am therefore bound to the [Civil Service Code](https://www.gov.uk/government/publications/civil-service-code/the-civil-service-code), however I try to make it clear that my opinions and choices are agnostic to any political preference.
