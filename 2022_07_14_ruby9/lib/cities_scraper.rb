require 'nokogiri'
require 'open-uri'
require 'pry'

url95 = 'http://annuaire-des-mairies.com/val-d-oise.html'

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

puts get_all_townhall_emails(url95)
