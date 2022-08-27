# require 'bundler'
# Bundler.require
require_relative 'lib/app/scrapper'
require 'pry'
require 'json'
require 'csv'
# require 'google_drive'


def get_townhall_email(url)
  doc = Nokogiri::HTML(URI.parse(url).open)
  doc.xpath('//section[2]//tr[4]/td[2]').text
end

def get_city(url)
  doc = Nokogiri::HTML(URI.parse(url).open)
  doc.xpath('//p[1]//strong[1]/a').text
end

def get_townhall_urls(url)
  parsed_page = Nokogiri::HTML(URI.parse(url).open)
  cities = parsed_page.css('a.lientxt') # [..5] # --> for testing
  townhall_urls = []
  cities.length.times do |i|
    townhall_urls << "http://annuaire-des-mairies.com#{cities[i]['href'][1..]}"
  end
  townhall_urls
end

def get_all_townhall_emails(url)
  list_of_urls = get_townhall_urls(url)
  directory = []
  list_of_urls.each_with_index do |address, i|
    print "\nScraping #{i + 1} out of #{list_of_urls.length} emails.\n"
    directory << { get_city(address) => get_townhall_email(address) }
  end
  directory
end

hash_to_store = get_all_townhall_emails('http://annuaire-des-mairies.com/val-d-oise.html')
# Store in a Json
# File.open("db/email.json","w") do |f|
#   f.write(JSON.pretty_generate(hash_to_store))
# end

# Store in a spreadsheet NOT FINISHED
# session = GoogleDrive::Session.from_config("config.json")
# ws = session.spreadsheet_by_key("pz7XtlQC-PYx-jrVMJErTcg").worksheets[0]

# Store in a CSV
HEADERS = ['city','email']
CSV.open("db/email.csv", "wb", :headers => HEADERS, :write_headers => true) do |csv|
  hash_to_store.each { |hash| csv << [hash.keys.first, hash[hash.keys.first]] }
end

# binding.pry
