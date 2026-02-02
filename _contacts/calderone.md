---
full_name: Calderone
type: Contact local dans les Favelas de Mérida
connection: 2
image: /assets/images/contacts/calderone.jpg
key: calderone
attributes:
  body: 4
  agility: 5
  reaction: 5
  strength: 3
  intuition: 5
  logic: 3
  willpower: 4
  charisma: 4
skills:
  stealth:
    infiltration: 4
    disguise: 3
  influence:
    negotiation: 4
    etiquette: 3
  ungrouped:
    perception: 5
  knowledge:
    street_gangs: 6
    local_history: 5
    criminal_activities: 4
---

Calderone est un contact local dans les favelas de Mérida, spécialisé dans les informations sur les activités criminelles et les mouvements des gangs. Il connaît bien les rues et les groupes criminels de la région.

## Missions

{% assign contact_missions = site.missions | where_exp: "mission", "mission.contacts" %}

{% if contact_missions.size > 0 %}
<div class="row mt-4">
  {% for mission in contact_missions %}
    {% assign contact_info = mission.contacts | where_exp: "contact", "contact.contact == page.key" | first %}
    {% if contact_info %}
    <div class="col-md-6 mb-4">
      <div class="card bg-dark text-white">
        <div class="card-body">
          <h5 class="card-title text-warning" style="text-transform: capitalize;">{{ mission.title | replace: "-", " " }}</h5>
          <p class="card-text"><strong>Date:</strong> {{ mission.game_date }}</p>
          <p class="card-text"><strong>Rôle:</strong> {{ contact_info.role }}</p>
          <p class="card-text"><strong>Description:</strong> {{ contact_info.description }}</p>
          <a href="{{ mission.url }}" class="btn btn-sm btn-outline-warning">Voir la mission</a>
        </div>
      </div>
    </div>
    {% endif %}
  {% endfor %}
</div>
{% else %}
<p>Aucune mission enregistrée pour ce contact.</p>
{% endif %}
