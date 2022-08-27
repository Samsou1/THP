# require 'bundler'
# Bundler.require

require_relative './lib/app/application.rb'
$LOAD_PATH.unshift File.expand_path('lib', __dir__)

Application.new
