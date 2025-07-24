---
title: Marco Falda’s publications
layout: default
banner: "/assets/images/banners/home.jpeg"
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
