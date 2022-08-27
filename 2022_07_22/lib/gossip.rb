require 'csv'

class Gossip
  attr_reader :author, :content
  
  def initialize(author, content)
    @content = content
    @author = author
  end

  def save
    CSV.open("./db/gossip.csv","a+") do |csv|
      csv << [@author, @content] 
    end
  end
end
