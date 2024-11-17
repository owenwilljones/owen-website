---
layout: layout.liquid
title: Stuff I've done
description: Things that Owen Jones has done and worked on
tags: nav
order: 2
---

Here are some things I've worked on and am currently working on that I think are noteworthy.

## Working on

### This website

I'm continuing to iterate this website. I don't know yet if I'll use it as anything other than a tiny internet presence but I've got _ideas_. We'll see.

### Ensuring the GOV.UK Design System website is WCAG 2.2 compliant

I've been leading-from-the-back on addressing a [DAC (Digital Accessibility Centre)](https://digitalaccessibilitycentre.org/) audit of our website against [WCAG 2.2](https://www.w3.org/TR/WCAG22/). I'm very grateful to be working on a service that puts so much thought into accessibility regardless of compliance needs, so alongside addressing literal issues that have come out of this audit, we've been more broadly thinking about the accessibility, usability and information architecture of the website. For example:

- Making technical changes to [the Accessible Autocomplete](https://github.com/alphagov/accessible-autocomplete), which we use in our site search, to make sure it retains it's namesake
- Auditing our website content as a whole to fix a few tiny issues raised by DAC but also think about our content strategy as a whole whilst we're in that neighbourhood
- Redesigning out site search, how the results are displayed etc, initially in response to specific issues but also to think about if the site search is still meeting our needs or if there's an opportunity to iterate

This work has involved lots of device and assistive tech testing which is something I often enjoy and feel comfortable doing. It's pleasant to do 'comfy' work every now and then.

## Finished

### Helping teams initialise GOV.UK Frontend javascript

I helped build [the `createAll` method](https://frontend.design-system.service.gov.uk/configure-components/#configure-instances-of-specific-components-using-the-createall-function), a part of GOV.UK Frontend's javascript API which allows javascript shipped with GOV.UK Frontend to be initialised more easily and consistently. Before, developers were manually initialising component javascript as they needed, creating more work for service teams. This enables our users to interface with our javascript API much more easily than before.

At the time it had been a whilst since I was deep in the gears of a code project and I'd been getting that nagging imposter syndrome feeling that I'm confident all developers get that I was atrophying as a technical person. Working on this stuff was refreshing in that it renewed both my awareness and interest in the proper _programming_ bit of my job title and reminded me why I've been doing this job for almost a full decade now.

This is part of [a bigger piece of work to make our javascript API more cohesive and beefy](https://github.com/alphagov/govuk-frontend/issues/5205) which is still ongoing. That was my little contribution.

### Adjusting our responsive type scale

I led on the implementation, planning and rollout of an adjustment to our responsive type scale; the font, line height and screen size combinations we use on the design system and ship for our users. This is a subtle but significant change to our typography to make them more readable on devices with smaller screens. This has wide reaching implications to the visual rhythm of the entire GOV.UK ecosystem so we thought a lot about communication and rollout of this change.

A lot of the work involved, especially the content and design work, wasn't done by me so I need to credit my excellent teammates but I did lots of coordinating. It's been interesting to cosplay a product/delivery person as part of this work.

[The initial version of this was launched end of Feb 2024](https://design-system.service.gov.uk/get-started/new-type-scale/) and we'll be continuing to iterate it and work on the peripheral typography bits. If you want to read more, [I wrote a blog to announce the type scale adjustments at the end of 2022](https://designnotes.blog.gov.uk/2022/12/12/making-the-gov-uk-frontend-typography-scale-more-accessible/).

### Exit this page pattern and component

I helped build the GOV.UK Design System's [exit this page](https://design-system.service.gov.uk/components/exit-this-page/) component and [exit a page quickly](https://design-system.service.gov.uk/patterns/exit-a-page-quickly/) pattern, 2 elements designed to increase the security of users at risk of domestic abuse to use services that might put them in danger to use. These elements work in tandem to help teams working on government services to figure out if their service could need an exit this page button and provides guidance on how to implement it, what it does and what they should include to further enable the safety of their users.

The intent of this work was to capitalise on research done by service teams working on services that include users at risk of domestic abuse, iterate on it and distribute it centrally from our design system for widespread use in government. It was an incredibly challenging project, both technically and emotionally. Whilst it's likely we'll never be able to provide a perfect version of this, what we have is incredibly robust.

If you want to learn more, [my team have written a blog about the exit this page work](https://designnotes.blog.gov.uk/2023/08/14/exit-this-page-fast-with-the-design-systems-new-component/).

### Pagination component

I built the initial technical implementation of the GOV.UK Design System's [pagination](https://design-system.service.gov.uk/components/pagination/) component, a way for service teams in government working with paginated data or lots of searchable data to let their users easily move between pages and know where they are when navigating through a data set.

This component is technically a combination of 2 components: classic, row of page numbers pagination and [a previous and next only version of the component](https://design-system.service.gov.uk/components/pagination#for-navigating-between-content-pages). This component switches between these states with CSS only.

This was an enjoyable component to work on both in terms of it's simplicity but also the interesting challenges we ran into along the way, such as how to manage hidden content to help contextualise the pagination links for screen reader users without assuming the grammar rules for if the component is used in a service translated into a different language.

There isn't a more detailed write up of this work that's written down anywhere right now but I'd like to write one eventually.

### GOV.UK homepage iteration

I helped to implement an iteration of the GOV.UK homepage, the first major iteration of the homepage for several years. The focus of this work was to make the homepage easier to use on mobile in response to data that the number of users on mobile had increased dramatically since the last iteration.

We did this by increasing touch targets of elements on the homepage, increasing the space between interactive elements such as links and re-evaluating what content we show on the homepage based on research and data analysis into the most prominent user information needs. In my opinion, this set the groundwork for [the much more significant iteration of the homepage](https://insidegovuk.blog.gov.uk/2023/11/01/a-bold-new-look-for-the-gov-uk-homepage) 2 years later.

You can read more in [this blog post on the homepage update](https://insidegovuk.blog.gov.uk/2021/12/13/updating-the-gov-uk-homepage/).

### Accordion component redesign

I helped rebuild the GOV.UK Design System [accordion](https://design-system.service.gov.uk/components/accordion/) component and contribute it back to the GOV.UK Design System (before I joined!). The intent of this redesign was to address a an issue raised on the accordion component following an accessibility audit that the previous accordion design didn't communicate clearly enough that it was an interactive element. We did this by capitalising on the work done on the [GOV.UK step by step pattern](https://gds.blog.gov.uk/2019/06/28/podcast-improving-government-services-with-gov-uk-step-by-step-navigation/), implementing those design decisions into the accordion and contributing this change into the design system so that it could be distributed across government.

We encountered a lot of technical challenges whilst building this component, where tweaks to improve one user group's experience ended up making it worse for another. We also had to contend with the difficult point that accordions might be inherently problematic and are a plaster over a deeper content problem with services. Despite this, we have something that is at the very least better than it was.

You can read more in [this blog post on the updated accordion](https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/).
