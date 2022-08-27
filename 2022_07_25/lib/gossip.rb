require 'json'
# require 'sinatra'
# require 'pry'

# This class interacts with the gossip.json "database"
class Gossip
  attr_reader :id, :author, :content

  def initialize(author, content)
    @author = author
    @content = content
  end

  def save
    gossip = { @author => @content }
    gossips = JSON.parse(File.read('./db/gossips.json'))
    gossips << gossip
    File.write('./db/gossips.json', JSON.pretty_generate(gossips))
    comments = JSON.parse(File.read('./db/comments.json'))
    comments << []
    File.write('./db/comments.json', JSON.pretty_generate(comments))
  end

  def self.show(id)
    JSON.parse(File.read('./db/gossips.json'))[id.to_i - 1]
  end

  def update(id)
    gossips = Gossip.all
    gossips.delete_at(id.to_i - 1)
    gossips.insert(id.to_i - 1, { @author => @content })
    File.write('./db/gossips.json', JSON.pretty_generate(gossips))
  end

  def self.all
    JSON.parse(File.read('./db/gossips.json'))
  end
end
