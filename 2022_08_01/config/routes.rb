Rails.application.routes.draw do
  root to: 'static#index'
  get '/home', to: 'static#index'
  get '/team', to: 'static#team'
  get '/contact', to: 'static#contact'
  get '/welcome/:first_name', to: 'greet#welcome'
  get '/gossips/:id', to: 'gossips#display'
  get '/author/:id', to: 'gossips#show_author'
end
