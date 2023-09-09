---
layout: default
title: Mostly Harmless
permalink: /andanotherthing/
---
Other human things I do, create, and write about.

List of recent writings:

Scientific:
{% for recent_sci in site.whysciwri %}
  <h2><a href="{{ recent_sci.url }}">{{ recent_sci.name }}</a></h2>
{% endfor %}

Literature:
{% for recent_lit in site.wrylitwri %}
  <h2><a href="{{ recent_lit.url }}">{{ recent_lit.name }}</a></h2>
{% endfor %}

