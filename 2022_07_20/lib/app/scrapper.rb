require 'nokogiri'
require 'open-uri'

class Scrapper
  attr_accessor :url_to_scrapp,

  def initialize

  end

  def save_as_JSON
    hash_to_store = get_all_townhall_emails
    File.open("db/email.json","w") do |f|
      f.write(JSON.pretty_generate(hash_to_store))
    end
  end

  def save_as_spreadsheet
    get_all_townhall_emails(url_to_scrapp)
  end

  def save_as_csv
    get_all_townhall_emails(url_to_scrapp)
  end

end

