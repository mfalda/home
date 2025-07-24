---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

The research activity of Dr. Marco Falda developed along two main lines: Artificial Intelligence during his stays at the Departments of Information Engineering and “Pure and Applied Mathematics” and Computational Biology while at the Departments of Biological Chemistry and Molecular Medicine, University of Padova. This activity is documented by 36 international scientific publications.

## Past research interests

* [Artificial Intelligence: Uncertain Temporal Reasoning in the frameworks of Constraint Programming and Fuzzy Logics](ai)

* [Computational Biology: Genomics and Proteomics](compbio)


## Last news

{% for post in site.posts %}
  <article>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-meta">
      Published on {{ post.date | date: "%B %d, %Y" }}
      {% if post.author %} da {{ post.author }}{% endif %}
    </p>
    <div class="post-excerpt">
      {{ post.excerpt | strip_html | truncatewords: 50 }}...
    </div>
    <a href="{{ post.url | relative_url }}" class="read-more">Leggi di più &raquo;</a>
  </article>
  {% unless forloop.last %}
    <hr> {# Una linea orizzontale tra i post, opzionale #}
  {% endunless %}
{% endfor %}


## Publications

[Publications](bibliography)
