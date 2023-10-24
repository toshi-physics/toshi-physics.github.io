---
layout: default
title: Mostly Harmless
permalink: /andanotherthing/
---
Other human things I do, create, and write about.

<h1>Recent sci-comm writings:</h1>
{% for recent_sci in site.whysciwri %}
  <h3><a href="{{ recent_sci.url | relative_url}}">{{ recent_sci.name }}</a>, work as {{recent_sci.position}}.</h3> 
{% endfor %}

<h1>Recent literary/journalism work:</h1>
{% for recent_lit in site.wrylitwri %}
  <h3><a href="{{ recent_lit.url | relative_url}}">{{ recent_lit.name}}</a>
  {% if recent_lit.name == "Insight-Campus Journalism, IIT Bombay"%}, work as {{recent_lit.position}}.
  {% endif %}
  </h3> 
{% endfor %}
<div id="sketch-container" style="text-align:center;">
			<script type="text/javascript" src=" {{ "assets/notwhiterabbit.js"  | relative_url }} "></script>
		</div>