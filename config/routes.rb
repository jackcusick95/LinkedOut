Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :new, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:show, :create, :index, :update, :destroy] do
      resources :comments, only: [:create]
    end 
    resources :comments, only: [:update, :destroy]
  end 

    root "static_pages#root"
end
