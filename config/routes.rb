Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {formet: :json} do
    resources :users
    resource :session, only:[:create,:destroy]
    resources :stories, only:[:create,:destroy,:edit,:index,:show]
    resources :chapters,only:[:create,:destroy,:edit,:show]
  end 
end
