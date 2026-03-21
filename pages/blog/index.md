---
layout: layout.liquid
title: Blog
description: Stuff Owen Jones wrote
tags: nav
order: 3
---

Sometimes I write stuff and put it online.

## Notes

Reflections on my work and beyond. I don't write these very often anymore but they're still here.

{% render 'macros/post-list', posts: collections.weeknotes, limit: 5 %}

[See all notes](/pages/blog/weeknotes)
