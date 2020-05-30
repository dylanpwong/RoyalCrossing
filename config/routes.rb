Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {formet: :json} do
    resources :users
    get '/users/:id/stories', to: 'users#show_stories', as: 'custom_route'
    get '/users/:id/story/:story_id', to: 'follows_tables#add_follows', as:'add_Follows_route'
    resources :genres, only:[:index]
    resource :session, only:[:create,:destroy]
    resources :stories, only:[:create,:destroy,:edit,:index,:show]
    resources :chapters,only:[:create,:destroy,:edit,:show]
  end 
end
