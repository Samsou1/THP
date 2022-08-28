Rails.application.routes.draw do
  root to: 'gossip#index'
  get '/home', to: 'gossip#index'
  get '/team', to: 'team#index'
  get '/contact', to: 'contact#index'
  get '/welcome/:first_name', to: 'welcome#index'
  resources :city
  resources :session, only: %i[new create destroy]
  resources :user
  resources :like, only: %i[create destroy]
  resources :gossip do
    resources :comment
  end
end
