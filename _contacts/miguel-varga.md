---
layout: contact
full_name: Miguel Varga
type: Responsable Opérationnel de DracoSec
key: miguel-varga
connection: "-"
image: /assets/images/contacts/miguel-varga.jpg
attributes:
  body: "-"
  agility: "-"
  reaction: "-"
  strength: "-"
  intuition: "-"
  logic: "-"
  willpower: "-"
  charisma: "-"
---

Miguel Varga est un humain qui occupe le poste de Responsable Opérationnel chez DracoSec, le département sécurité de Dracotec. Il a embauché Ahau-Tec et Ghost pour des opérations de sécurité discrètes. Son expérience et son réseau en font un acteur clé dans le milieu de la sécurité privée.

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