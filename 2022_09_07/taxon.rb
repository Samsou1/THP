require 'open-uri'
require 'json'

def get_place(place)
  place_url = "https://api.inaturalist.org/v1/search?q=#{place}&sources=places&per_page=1"
  place_data = JSON.load(URI.open(place_url))['results'][0]
  [place_data['matches'].join(" "), place_data['record']['id']]
end

def get_place_name(place)
  get_place(place)[0]
end

def get_place_id(place)
  get_place(place)[1]
end

def get_data(place, number_of_elements)
  place_id = get_place_id(place)
  taxa_url = "https://api.inaturalist.org/v1/taxa?is_active=true&taxon_id=47126&rank_level=20&per_page=#{number_of_elements}&preferred_place_id=#{place_id}&all_names=true"
  taxa_data = JSON.load(URI.open(taxa_url))['results']
  results = []
  taxa_data.size.times do |index|
    hash_data = {}
    hash_data[:common_name] = taxa_data[index]["preferred_common_name"].capitalize
    hash_data[:scientific_name] = taxa_data[index]["name"]
    hash_data[:wiki] = taxa_data[index]["wikipedia_url"]
    hash_data[:picture_url] = taxa_data[index]["default_photo"]["medium_url"]
    results.push(hash_data)
  end
  # File.write('./data.json', JSON.dump(results))
  results
end

puts get_data('Paris', 10)
