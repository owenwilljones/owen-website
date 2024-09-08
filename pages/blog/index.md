---
layout: layout.njk
title: Blog
description: Stuff Owen Jones written and put up on the website
tags: nav
---

Sometimes I write stuff and put it online.

## Weeknotes

Weekly(?) reflections on my work and beyond over the past week.

{% for post in collections.weeknotes -%}
### [{{ post.data.title }}]({{ post.url }})
{{ post.data.description }}

Published: {{ post.page.date | date: "%e %B %Y" }}
{%- endfor -%}
