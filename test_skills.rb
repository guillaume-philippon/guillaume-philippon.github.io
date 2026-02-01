#!/usr/bin/env ruby

require 'yaml'
require 'json'

# Charger les données des compétences
skills_data = YAML.load_file('_data/skills.yaml')
puts "Skills data structure:"
puts JSON.pretty_generate(skills_data)

# Charger les données d'un personnage
character_data = YAML.load_file('_characters/ahau-tec.md')
puts "\nCharacter skills structure:"
puts JSON.pretty_generate(character_data['skills'])