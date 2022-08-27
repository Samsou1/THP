# require 'bundler'
# Bundler.require
require_relative 'gossip'
require 'comment'

# This is the main controller
class ApplicationController < Sinatra::Base
  get '/' do
    erb :index, locals: { gossips: Gossip.all }
  end

  get '/gossips/:id' do
    erb :gossip,
        locals: { gossip: Gossip.show(params['id']), comments: Comment.show, index: params['id'] }
  end

  post '/gossips/:id' do
    Comment.new(params['comment_author'], params['comment_content'], params['id']).save
    redirect "/gossips/#{params['id']}"
  end

  get '/gossips/new/' do
    erb :new_gossip
  end

  post '/gossips/new/' do
    Gossip.new(params['gossip_author'], params['gossip_content']).save
    redirect '/'
  end

  get '/gossips/:id/edit/' do
    erb :gossip_edit, locals: { gossip: Gossip.show(params['id']), index: params['id'], comments: Comment }
  end

  post '/gossips/:id/edit/' do
    Gossip.new(params['gossip_author'], params['gossip_content']).update(params['id'])
    redirect "/gossips/#{params['id']}"
  end
end
