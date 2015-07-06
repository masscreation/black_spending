Rails.application.routes.draw do


  root 'application#angular'

  devise_for :users

  namespace :api, defaults: {format: 'json'} do 

    devise_scope :users do
      post 'users/password', to: 'password#create'
    end

    resources :users, only: [:create, :update, :show]

    resources :exercises

    resources :training_sessions, only: [:create, :index, :show] do 
      resources :exercise_sets, only: [:create, :index]
    end

     resources :workouts, only: [:create, :index, :show] do 
       resources :exercises, only: [:create, :index, :show]
     end

    resources :categories, only: [:create, :index, :show] do 
      resources :exercises, only: [:create, :index, :show]
    end
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  get "*path", to: "application#angular"

   # get '/categories' => 'categories#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
