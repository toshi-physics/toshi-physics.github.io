---
layout: default
title: Projects
permalink: /projects/
---
Here's a list of projects that interest me:

{% for current_project in site.current_projects %}
  <h2><a href="{{ current_project.url }}">{{ current_project.name }}</a></h2>
{% endfor %}

{% for past_project in site.past_projects %}
  <h2><a href="{{ past_project.url }}">{{ past_project.name }}</a></h2>
{% endfor %}

