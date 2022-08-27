require 'json'
# require 'sinatra'
# require 'pry'

# This class interacts with the gossip.json "database"
class Comment
  attr_reader :id, :author, :content

  def initialize(aut, cont, id)
    @author = aut
    @content = cont
    @id = id.to_i
  end

  def save
    comment = { @author => @content }
    comments = JSON.parse(File.read('./db/comments.json'))
    comments[@id - 1] << comment
    File.write('./db/comments.json', JSON.pretty_generate(comments))
  end

  def self.show
    JSON.parse(File.read('./db/comments.json'))
  end
end
