Rails.application.routes.draw do
  root 'events#index'
  devise_for :users
  get 'profile', action: :show, controller: 'users'
  post 'profile', action: :update, controller: 'users'
  get 'profile/edit', action: :edit, controller: 'users'
  # namespace :admin do
    resources :users, only: %i[index edit show update destroy]
    resources :events, only: %i[index edit show update destroy]
  # end
  resources :events do
    resources :attendances, only: %i[create new index]
  end
  resources :checkout, only: %i[create]
end
