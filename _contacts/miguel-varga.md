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
missions:
  - mission: point-mort
    date: 2075-01-31
    role: "Responsable opérationnel de DracoSec"
    description: "A briefé l'équipe et confirmé le redéploiement des membres"
---

Miguel Varga est un humain qui occupe le poste de Responsable Opérationnel chez DracoSec, le département sécurité de Dracotec. Il a embauché Ahau-Tec et Ghost pour des opérations de sécurité discrètes. Son expérience et son réseau en font un acteur clé dans le milieu de la sécurité privée.

## Missions

{% if page.missions %}
<div class="row mt-4">
  {% for mission in page.missions %}
  <div class="col-md-6 mb-4">
    <div class="card bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title text-warning" style="text-transform: capitalize;">{{ mission.mission | replace: "-", " " }}</h5>
        <p class="card-text"><strong>Date:</strong> {{ mission.date }}</p>
        <p class="card-text"><strong>Rôle:</strong> {{ mission.role }}</p>
        <p class="card-text"><strong>Description:</strong> {{ mission.description }}</p>
        <a href="/missions/{{ mission.mission }}" class="btn btn-sm btn-outline-warning">Voir la mission</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}