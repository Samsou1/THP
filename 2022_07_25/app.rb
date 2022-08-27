require 'bundler'
Bundler.require

$LOAD_PATH.unshift File.expand_path('lib', __dir__)

get '/hello' do
  '<h1>Hello world ! </h1>'
end

get '/bonjour' do
  '<h1>Bonjour, monde !</h1>'
end
