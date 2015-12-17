Rails.application.routes.draw do

  root 'application#angular'

  

  namespace :api, defaults: {format: 'json'} do 

  devise_for :users, skip: [:registrations]
  devise_for :athletes, defaults: {format: 'json'}, skip: :sessions
  devise_for :trainers, defaults: {format: 'json'}, skip: :sessions
  devise_for :admins, skip: [:sessions, :registrations]

    devise_scope :athletes do
      post 'athletes/password', to: 'password#create'
    end
    devise_scope :trainers do
      post 'trainers/password', to: 'password#create'
    end

    resource :admin do 
      resources :trainers, only: [:update, :show]
    end

    # Trainer-related resources -------->
    resources :trainers do
      resources :training_routines
      resources :workouts
    end

    resources :training_routines do 
      resources :training_sessions
      resources :enrollments
    end

    resources :workouts, only: [:create, :index, :show] do 
       resources :workout_exercises, only: [:create, :index, :show]
    end

    resources :athletes, only: [:create, :update, :show] do 
      resources :enrollments
      resources :athlete_training_sessions
      resources :exercise_sets 
    end 

    
   
    resources :exercises, only: [:create, :index, :show]

    resources :training_sessions, only: [:create, :index, :show] do 
      resources :workout_exercises, only: [:create, :index, :show]
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
# Prefix Verb   URI Pattern                                                         Controller#Action
#                               root GET    /                                                                   application#angular
#                   new_user_session GET    /users/sign_in(.:format)                                            devise/sessions#new
#                       user_session POST   /users/sign_in(.:format)                                            devise/sessions#create
#               destroy_user_session DELETE /users/sign_out(.:format)                                           devise/sessions#destroy
#                      user_password POST   /users/password(.:format)                                           devise/passwords#create
#                  new_user_password GET    /users/password/new(.:format)                                       devise/passwords#new
#                 edit_user_password GET    /users/password/edit(.:format)                                      devise/passwords#edit
#                                    PATCH  /users/password(.:format)                                           devise/passwords#update
#                                    PUT    /users/password(.:format)                                           devise/passwords#update
#           cancel_user_registration GET    /users/cancel(.:format)                                             devise/registrations#cancel
#                  user_registration POST   /users(.:format)                                                    devise/registrations#create
#              new_user_registration GET    /users/sign_up(.:format)                                            devise/registrations#new
#             edit_user_registration GET    /users/edit(.:format)                                               devise/registrations#edit
#                                    PATCH  /users(.:format)                                                    devise/registrations#update
#                                    PUT    /users(.:format)                                                    devise/registrations#update
#                                    DELETE /users(.:format)                                                    devise/registrations#destroy
#                 api_users_password POST   /api/users/password(.:format)                                       api/password#create {:format=>"json"}
#                          api_users POST   /api/users(.:format)                                                api/users#create {:format=>"json"}
#                           api_user GET    /api/users/:id(.:format)                                            api/users#show {:format=>"json"}
#                                    PATCH  /api/users/:id(.:format)                                            api/users#update {:format=>"json"}
#                                    PUT    /api/users/:id(.:format)                                            api/users#update {:format=>"json"}
#                      api_exercises GET    /api/exercises(.:format)                                            api/exercises#index {:format=>"json"}
#                                    POST   /api/exercises(.:format)                                            api/exercises#create {:format=>"json"}
#                   new_api_exercise GET    /api/exercises/new(.:format)                                        api/exercises#new {:format=>"json"}
#                  edit_api_exercise GET    /api/exercises/:id/edit(.:format)                                   api/exercises#edit {:format=>"json"}
#                       api_exercise GET    /api/exercises/:id(.:format)                                        api/exercises#show {:format=>"json"}
#                                    PATCH  /api/exercises/:id(.:format)                                        api/exercises#update {:format=>"json"}
#                                    PUT    /api/exercises/:id(.:format)                                        api/exercises#update {:format=>"json"}
#                                    DELETE /api/exercises/:id(.:format)                                        api/exercises#destroy {:format=>"json"}
# api_training_session_exercise_sets GET    /api/training_sessions/:training_session_id/exercise_sets(.:format) api/exercise_sets#index {:format=>"json"}
#                                    POST   /api/training_sessions/:training_session_id/exercise_sets(.:format) api/exercise_sets#create {:format=>"json"}
#              api_training_sessions GET    /api/training_sessions(.:format)                                    api/training_sessions#index {:format=>"json"}
#                                    POST   /api/training_sessions(.:format)                                    api/training_sessions#create {:format=>"json"}
#               api_training_session GET    /api/training_sessions/:id(.:format)                                api/training_sessions#show {:format=>"json"}
#              api_workout_exercises GET    /api/workouts/:workout_id/exercises(.:format)                       api/exercises#index {:format=>"json"}
#                                    POST   /api/workouts/:workout_id/exercises(.:format)                       api/exercises#create {:format=>"json"}
#               api_workout_exercise GET    /api/workouts/:workout_id/exercises/:id(.:format)                   api/exercises#show {:format=>"json"}
#                       api_workouts GET    /api/workouts(.:format)                                             api/workouts#index {:format=>"json"}
#                                    POST   /api/workouts(.:format)                                             api/workouts#create {:format=>"json"}
#                        api_workout GET    /api/workouts/:id(.:format)                                         api/workouts#show {:format=>"json"}
#             api_category_exercises GET    /api/categories/:category_id/exercises(.:format)                    api/exercises#index {:format=>"json"}
#                                    POST   /api/categories/:category_id/exercises(.:format)                    api/exercises#create {:format=>"json"}
#              api_category_exercise GET    /api/categories/:category_id/exercises/:id(.:format)                api/exercises#show {:format=>"json"}
#                     api_categories GET    /api/categories(.:format)                                           api/categories#index {:format=>"json"}
#                                    POST   /api/categories(.:format)                                           api/categories#create {:format=>"json"}
#                       api_category GET    /api/categories/:id(.:format)                                       api/categories#show {:format=>"json"}
#                                    GET    /*path(.:format)                                                    application#angular