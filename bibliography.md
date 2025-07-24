---
title: Marco Falda’s publications
layout: default
---

## Bibliography

### Journal Articles

<ol>
{% for publ in site.data.my_papers %}
  <li>
    {{ publ.Authors }}. {{ publ.Title }}. {{ publ.Source }}, {{ publ.Volume }} ({{ publ.Issue }}), {{ publ.Year }}.
  </li>
{% endfor %}
</ol>
