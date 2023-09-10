---
layout: default
title: Projects
permalink: /projects/
---
Here's a list of projects that interest me,
{% for current_project in site.current_projects %}
  <h2><a href="{{ current_project.url }}">{{ current_project.name }}</a></h2>
{% endfor %}

{% for past_project in site.past_projects %}
  <h2><a href="{{ past_project.url }}">{{ past_project.name }}</a></h2>
{% endfor %}
<html>
	<body>
	  <p>Meanwhile, meet Batuk, the bacterium. They like to frolic around on the soft agar, ambling by, tumbling here and there, 
munching on the glucose-rich agar honeyed by their human in a colossal petri dish. Unbeknownst to Batuk, this 
petri dish shares more features with Dante's third than just its proverbial circularity. But Batuk isn't bothered. You can make 
friends with Batuk easily by luring them with food - just press on the agar to watch them throw caution (and tumbles) to the wind for 
some yummy food!</p>
	<div id="sketch-container" style="text-align:center;">
                <script type="text/javascript" src="{{ "assets/runtumblepet.js" | relative_url }}"></script>
        </div>
	</body>
</html>
