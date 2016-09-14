Rails.application.routes.draw do

  devise_for :users, controllers: { 
    sessions: "api/sessions", 
    registrations: "api/registrations", 
  }

  root 'application#angular'

  namespace :api, defaults: {format: 'json'} do 

    resource :admin do 
      resources :users, only: [:update, :show, :delete]
    end

    resources :users do 
      resources :user_roles
    end

    resources :roles do 
      resources :user_roles
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
#  Prefix Verb   URI Pattern                                                                      Controller#Action
#                               levels_index GET    /levels/index(.:format)                                                          levels#index
#                                levels_show GET    /levels/show(.:format)                                                           levels#show
#                              levels_create GET    /levels/create(.:format)                                                         levels#create
#                             levels_destroy GET    /levels/destroy(.:format)                                                        levels#destroy
#                                       root GET    /                                                                                application#angular
#                       new_api_user_session GET    /api/users/sign_in(.:format)                                                     api/sessions#new {:format=>"json"}
#                           api_user_session POST   /api/users/sign_in(.:format)                                                     api/sessions#create {:format=>"json"}
#                   destroy_api_user_session DELETE /api/users/sign_out(.:format)                                                    api/sessions#destroy {:format=>"json"}
#                          api_user_password POST   /api/users/password(.:format)                                                    api/passwords#create {:format=>"json"}
#                      new_api_user_password GET    /api/users/password/new(.:format)                                                api/passwords#new {:format=>"json"}
#                     edit_api_user_password GET    /api/users/password/edit(.:format)                                               api/passwords#edit {:format=>"json"}
#                                            PATCH  /api/users/password(.:format)                                                    api/passwords#update {:format=>"json"}
#                                            PUT    /api/users/password(.:format)                                                    api/passwords#update {:format=>"json"}
#                    new_api_athlete_session GET    /api/athletes/sign_in(.:format)                                                  api/sessions#new {:format=>"json"}
#                        api_athlete_session POST   /api/athletes/sign_in(.:format)                                                  api/sessions#create {:format=>"json"}
#                destroy_api_athlete_session DELETE /api/athletes/sign_out(.:format)                                                 api/sessions#destroy {:format=>"json"}
#                       api_athlete_password POST   /api/athletes/password(.:format)                                                 api/passwords#create {:format=>"json"}
#                   new_api_athlete_password GET    /api/athletes/password/new(.:format)                                             api/passwords#new {:format=>"json"}
#                  edit_api_athlete_password GET    /api/athletes/password/edit(.:format)                                            api/passwords#edit {:format=>"json"}
#                                            PATCH  /api/athletes/password(.:format)                                                 api/passwords#update {:format=>"json"}
#                                            PUT    /api/athletes/password(.:format)                                                 api/passwords#update {:format=>"json"}
#            cancel_api_athlete_registration GET    /api/athletes/cancel(.:format)                                                   api/registrations#cancel {:format=>"json"}
#                   api_athlete_registration POST   /api/athletes(.:format)                                                          api/registrations#create {:format=>"json"}
#               new_api_athlete_registration GET    /api/athletes/sign_up(.:format)                                                  api/registrations#new {:format=>"json"}
#              edit_api_athlete_registration GET    /api/athletes/edit(.:format)                                                     api/registrations#edit {:format=>"json"}
#                                            PATCH  /api/athletes(.:format)                                                          api/registrations#update {:format=>"json"}
#                                            PUT    /api/athletes(.:format)                                                          api/registrations#update {:format=>"json"}
#                                            DELETE /api/athletes(.:format)                                                          api/registrations#destroy {:format=>"json"}
#                    new_api_trainer_session GET    /api/trainers/sign_in(.:format)                                                  api/sessions#new {:format=>"json"}
#                        api_trainer_session POST   /api/trainers/sign_in(.:format)                                                  api/sessions#create {:format=>"json"}
#                destroy_api_trainer_session DELETE /api/trainers/sign_out(.:format)                                                 api/sessions#destroy {:format=>"json"}
#                       api_trainer_password POST   /api/trainers/password(.:format)                                                 api/passwords#create {:format=>"json"}
#                   new_api_trainer_password GET    /api/trainers/password/new(.:format)                                             api/passwords#new {:format=>"json"}
#                  edit_api_trainer_password GET    /api/trainers/password/edit(.:format)                                            api/passwords#edit {:format=>"json"}
#                                            PATCH  /api/trainers/password(.:format)                                                 api/passwords#update {:format=>"json"}
#                                            PUT    /api/trainers/password(.:format)                                                 api/passwords#update {:format=>"json"}
#            cancel_api_trainer_registration GET    /api/trainers/cancel(.:format)                                                   api/registrations#cancel {:format=>"json"}
#                   api_trainer_registration POST   /api/trainers(.:format)                                                          api/registrations#create {:format=>"json"}
#               new_api_trainer_registration GET    /api/trainers/sign_up(.:format)                                                  api/registrations#new {:format=>"json"}
#              edit_api_trainer_registration GET    /api/trainers/edit(.:format)                                                     api/registrations#edit {:format=>"json"}
#                                            PATCH  /api/trainers(.:format)                                                          api/registrations#update {:format=>"json"}
#                                            PUT    /api/trainers(.:format)                                                          api/registrations#update {:format=>"json"}
#                                            DELETE /api/trainers(.:format)                                                          api/registrations#destroy {:format=>"json"}
#                         api_admin_password POST   /api/admins/password(.:format)                                                   api/passwords#create {:format=>"json"}
#                     new_api_admin_password GET    /api/admins/password/new(.:format)                                               api/passwords#new {:format=>"json"}
#                    edit_api_admin_password GET    /api/admins/password/edit(.:format)                                              api/passwords#edit {:format=>"json"}
#                                            PATCH  /api/admins/password(.:format)                                                   api/passwords#update {:format=>"json"}
#                                            PUT    /api/admins/password(.:format)                                                   api/passwords#update {:format=>"json"}
#                      api_athletes_password POST   /api/athletes/password(.:format)                                                 api/password#create {:format=>"json"}
#                      api_trainers_password POST   /api/trainers/password(.:format)                                                 api/password#create {:format=>"json"}
#                          api_admin_trainer GET    /api/admin/trainers/:id(.:format)                                                api/trainers#show {:format=>"json"}
#                                            PATCH  /api/admin/trainers/:id(.:format)                                                api/trainers#update {:format=>"json"}
#                                            PUT    /api/admin/trainers/:id(.:format)                                                api/trainers#update {:format=>"json"}
#                                  api_admin POST   /api/admin(.:format)                                                             api/admins#create {:format=>"json"}
#                              new_api_admin GET    /api/admin/new(.:format)                                                         api/admins#new {:format=>"json"}
#                             edit_api_admin GET    /api/admin/edit(.:format)                                                        api/admins#edit {:format=>"json"}
#                                            GET    /api/admin(.:format)                                                             api/admins#show {:format=>"json"}
#                                            PATCH  /api/admin(.:format)                                                             api/admins#update {:format=>"json"}
#                                            PUT    /api/admin(.:format)                                                             api/admins#update {:format=>"json"}
#                                            DELETE /api/admin(.:format)                                                             api/admins#destroy {:format=>"json"}
#              api_trainer_training_routines GET    /api/trainers/:trainer_id/training_routines(.:format)                            api/training_routines#index {:format=>"json"}
#                                            POST   /api/trainers/:trainer_id/training_routines(.:format)                            api/training_routines#create {:format=>"json"}
#           new_api_trainer_training_routine GET    /api/trainers/:trainer_id/training_routines/new(.:format)                        api/training_routines#new {:format=>"json"}
#          edit_api_trainer_training_routine GET    /api/trainers/:trainer_id/training_routines/:id/edit(.:format)                   api/training_routines#edit {:format=>"json"}
#               api_trainer_training_routine GET    /api/trainers/:trainer_id/training_routines/:id(.:format)                        api/training_routines#show {:format=>"json"}
#                                            PATCH  /api/trainers/:trainer_id/training_routines/:id(.:format)                        api/training_routines#update {:format=>"json"}
#                                            PUT    /api/trainers/:trainer_id/training_routines/:id(.:format)                        api/training_routines#update {:format=>"json"}
#                                            DELETE /api/trainers/:trainer_id/training_routines/:id(.:format)                        api/training_routines#destroy {:format=>"json"}
#                       api_trainer_workouts GET    /api/trainers/:trainer_id/workouts(.:format)                                     api/workouts#index {:format=>"json"}
#                                            POST   /api/trainers/:trainer_id/workouts(.:format)                                     api/workouts#create {:format=>"json"}
#                    new_api_trainer_workout GET    /api/trainers/:trainer_id/workouts/new(.:format)                                 api/workouts#new {:format=>"json"}
#                   edit_api_trainer_workout GET    /api/trainers/:trainer_id/workouts/:id/edit(.:format)                            api/workouts#edit {:format=>"json"}
#                        api_trainer_workout GET    /api/trainers/:trainer_id/workouts/:id(.:format)                                 api/workouts#show {:format=>"json"}
#                                            PATCH  /api/trainers/:trainer_id/workouts/:id(.:format)                                 api/workouts#update {:format=>"json"}
#                                            PUT    /api/trainers/:trainer_id/workouts/:id(.:format)                                 api/workouts#update {:format=>"json"}
#                                            DELETE /api/trainers/:trainer_id/workouts/:id(.:format)                                 api/workouts#destroy {:format=>"json"}
#                               api_trainers GET    /api/trainers(.:format)                                                          api/trainers#index {:format=>"json"}
#                                            POST   /api/trainers(.:format)                                                          api/trainers#create {:format=>"json"}
#                            new_api_trainer GET    /api/trainers/new(.:format)                                                      api/trainers#new {:format=>"json"}
#                           edit_api_trainer GET    /api/trainers/:id/edit(.:format)                                                 api/trainers#edit {:format=>"json"}
#                                api_trainer GET    /api/trainers/:id(.:format)                                                      api/trainers#show {:format=>"json"}
#                                            PATCH  /api/trainers/:id(.:format)                                                      api/trainers#update {:format=>"json"}
#                                            PUT    /api/trainers/:id(.:format)                                                      api/trainers#update {:format=>"json"}
#                                            DELETE /api/trainers/:id(.:format)                                                      api/trainers#destroy {:format=>"json"}
#     api_training_routine_training_sessions GET    /api/training_routines/:training_routine_id/training_sessions(.:format)          api/training_sessions#index {:format=>"json"}
#                                            POST   /api/training_routines/:training_routine_id/training_sessions(.:format)          api/training_sessions#create {:format=>"json"}
#  new_api_training_routine_training_session GET    /api/training_routines/:training_routine_id/training_sessions/new(.:format)      api/training_sessions#new {:format=>"json"}
# edit_api_training_routine_training_session GET    /api/training_routines/:training_routine_id/training_sessions/:id/edit(.:format) api/training_sessions#edit {:format=>"json"}
#      api_training_routine_training_session GET    /api/training_routines/:training_routine_id/training_sessions/:id(.:format)      api/training_sessions#show {:format=>"json"}
#                                            PATCH  /api/training_routines/:training_routine_id/training_sessions/:id(.:format)      api/training_sessions#update {:format=>"json"}
#                                            PUT    /api/training_routines/:training_routine_id/training_sessions/:id(.:format)      api/training_sessions#update {:format=>"json"}
#                                            DELETE /api/training_routines/:training_routine_id/training_sessions/:id(.:format)      api/training_sessions#destroy {:format=>"json"}
#           api_training_routine_enrollments GET    /api/training_routines/:training_routine_id/enrollments(.:format)                api/enrollments#index {:format=>"json"}
#                                            POST   /api/training_routines/:training_routine_id/enrollments(.:format)                api/enrollments#create {:format=>"json"}
#        new_api_training_routine_enrollment GET    /api/training_routines/:training_routine_id/enrollments/new(.:format)            api/enrollments#new {:format=>"json"}
#       edit_api_training_routine_enrollment GET    /api/training_routines/:training_routine_id/enrollments/:id/edit(.:format)       api/enrollments#edit {:format=>"json"}
#            api_training_routine_enrollment GET    /api/training_routines/:training_routine_id/enrollments/:id(.:format)            api/enrollments#show {:format=>"json"}
#                                            PATCH  /api/training_routines/:training_routine_id/enrollments/:id(.:format)            api/enrollments#update {:format=>"json"}
#                                            PUT    /api/training_routines/:training_routine_id/enrollments/:id(.:format)            api/enrollments#update {:format=>"json"}
#                                            DELETE /api/training_routines/:training_routine_id/enrollments/:id(.:format)            api/enrollments#destroy {:format=>"json"}
#                      api_training_routines GET    /api/training_routines(.:format)                                                 api/training_routines#index {:format=>"json"}
#                                            POST   /api/training_routines(.:format)                                                 api/training_routines#create {:format=>"json"}
#                   new_api_training_routine GET    /api/training_routines/new(.:format)                                             api/training_routines#new {:format=>"json"}
#                  edit_api_training_routine GET    /api/training_routines/:id/edit(.:format)                                        api/training_routines#edit {:format=>"json"}
#                       api_training_routine GET    /api/training_routines/:id(.:format)                                             api/training_routines#show {:format=>"json"}
#                                            PATCH  /api/training_routines/:id(.:format)                                             api/training_routines#update {:format=>"json"}
#                                            PUT    /api/training_routines/:id(.:format)                                             api/training_routines#update {:format=>"json"}
#                                            DELETE /api/training_routines/:id(.:format)                                             api/training_routines#destroy {:format=>"json"}
#              api_workout_workout_exercises GET    /api/workouts/:workout_id/workout_exercises(.:format)                            api/workout_exercises#index {:format=>"json"}
#                                            POST   /api/workouts/:workout_id/workout_exercises(.:format)                            api/workout_exercises#create {:format=>"json"}
#               api_workout_workout_exercise GET    /api/workouts/:workout_id/workout_exercises/:id(.:format)                        api/workout_exercises#show {:format=>"json"}
#                               api_workouts GET    /api/workouts(.:format)                                                          api/workouts#index {:format=>"json"}
#                                            POST   /api/workouts(.:format)                                                          api/workouts#create {:format=>"json"}
#                                api_workout GET    /api/workouts/:id(.:format)                                                      api/workouts#show {:format=>"json"}
#                    api_athlete_enrollments GET    /api/athletes/:athlete_id/enrollments(.:format)                                  api/enrollments#index {:format=>"json"}
#                                            POST   /api/athletes/:athlete_id/enrollments(.:format)                                  api/enrollments#create {:format=>"json"}
#                 new_api_athlete_enrollment GET    /api/athletes/:athlete_id/enrollments/new(.:format)                              api/enrollments#new {:format=>"json"}
#                edit_api_athlete_enrollment GET    /api/athletes/:athlete_id/enrollments/:id/edit(.:format)                         api/enrollments#edit {:format=>"json"}
#                     api_athlete_enrollment GET    /api/athletes/:athlete_id/enrollments/:id(.:format)                              api/enrollments#show {:format=>"json"}
#                                            PATCH  /api/athletes/:athlete_id/enrollments/:id(.:format)                              api/enrollments#update {:format=>"json"}
#                                            PUT    /api/athletes/:athlete_id/enrollments/:id(.:format)                              api/enrollments#update {:format=>"json"}
#                                            DELETE /api/athletes/:athlete_id/enrollments/:id(.:format)                              api/enrollments#destroy {:format=>"json"}
#      api_athlete_athlete_training_sessions GET    /api/athletes/:athlete_id/athlete_training_sessions(.:format)                    api/athlete_training_sessions#index {:format=>"json"}
#                                            POST   /api/athletes/:athlete_id/athlete_training_sessions(.:format)                    api/athlete_training_sessions#create {:format=>"json"}
#   new_api_athlete_athlete_training_session GET    /api/athletes/:athlete_id/athlete_training_sessions/new(.:format)                api/athlete_training_sessions#new {:format=>"json"}
#  edit_api_athlete_athlete_training_session GET    /api/athletes/:athlete_id/athlete_training_sessions/:id/edit(.:format)           api/athlete_training_sessions#edit {:format=>"json"}
#       api_athlete_athlete_training_session GET    /api/athletes/:athlete_id/athlete_training_sessions/:id(.:format)                api/athlete_training_sessions#show {:format=>"json"}
#                                            PATCH  /api/athletes/:athlete_id/athlete_training_sessions/:id(.:format)                api/athlete_training_sessions#update {:format=>"json"}
#                                            PUT    /api/athletes/:athlete_id/athlete_training_sessions/:id(.:format)                api/athlete_training_sessions#update {:format=>"json"}
#                                            DELETE /api/athletes/:athlete_id/athlete_training_sessions/:id(.:format)                api/athlete_training_sessions#destroy {:format=>"json"}
#                  api_athlete_exercise_sets GET    /api/athletes/:athlete_id/exercise_sets(.:format)                                api/exercise_sets#index {:format=>"json"}
#                                            POST   /api/athletes/:athlete_id/exercise_sets(.:format)                                api/exercise_sets#create {:format=>"json"}
#               new_api_athlete_exercise_set GET    /api/athletes/:athlete_id/exercise_sets/new(.:format)                            api/exercise_sets#new {:format=>"json"}
#              edit_api_athlete_exercise_set GET    /api/athletes/:athlete_id/exercise_sets/:id/edit(.:format)                       api/exercise_sets#edit {:format=>"json"}
#                   api_athlete_exercise_set GET    /api/athletes/:athlete_id/exercise_sets/:id(.:format)                            api/exercise_sets#show {:format=>"json"}
#                                            PATCH  /api/athletes/:athlete_id/exercise_sets/:id(.:format)                            api/exercise_sets#update {:format=>"json"}
#                                            PUT    /api/athletes/:athlete_id/exercise_sets/:id(.:format)                            api/exercise_sets#update {:format=>"json"}
#                                            DELETE /api/athletes/:athlete_id/exercise_sets/:id(.:format)                            api/exercise_sets#destroy {:format=>"json"}
#                               api_athletes POST   /api/athletes(.:format)                                                          api/athletes#create {:format=>"json"}
#                                api_athlete GET    /api/athletes/:id(.:format)                                                      api/athletes#show {:format=>"json"}
#                                            PATCH  /api/athletes/:id(.:format)                                                      api/athletes#update {:format=>"json"}
#                                            PUT    /api/athletes/:id(.:format)                                                      api/athletes#update {:format=>"json"}
#                                 api_levels GET    /api/levels(.:format)                                                            api/levels#index {:format=>"json"}
#                                  api_level GET    /api/levels/:id(.:format)                                                        api/levels#show {:format=>"json"}
#                              api_exercises GET    /api/exercises(.:format)                                                         api/exercises#index {:format=>"json"}
#                                            POST   /api/exercises(.:format)                                                         api/exercises#create {:format=>"json"}
#                               api_exercise GET    /api/exercises/:id(.:format)                                                     api/exercises#show {:format=>"json"}
#     api_training_session_workout_exercises GET    /api/training_sessions/:training_session_id/workout_exercises(.:format)          api/workout_exercises#index {:format=>"json"}
#                                            POST   /api/training_sessions/:training_session_id/workout_exercises(.:format)          api/workout_exercises#create {:format=>"json"}
#      api_training_session_workout_exercise GET    /api/training_sessions/:training_session_id/workout_exercises/:id(.:format)      api/workout_exercises#show {:format=>"json"}
#                      api_training_sessions GET    /api/training_sessions(.:format)                                                 api/training_sessions#index {:format=>"json"}
#                                            POST   /api/training_sessions(.:format)                                                 api/training_sessions#create {:format=>"json"}
#                       api_training_session GET    /api/training_sessions/:id(.:format)                                             api/training_sessions#show {:format=>"json"}
#                     api_category_exercises GET    /api/categories/:category_id/exercises(.:format)                                 api/exercises#index {:format=>"json"}
#                                            POST   /api/categories/:category_id/exercises(.:format)                                 api/exercises#create {:format=>"json"}
#                      api_category_exercise GET    /api/categories/:category_id/exercises/:id(.:format)                             api/exercises#show {:format=>"json"}
#                             api_categories GET    /api/categories(.:format)                                                        api/categories#index {:format=>"json"}
#                                            POST   /api/categories(.:format)                                                        api/categories#create {:format=>"json"}
#                               api_category GET    /api/categories/:id(.:format)                                                    api/categories#show {:format=>"json"}
#                                            GET    /*path(.:format)                                                                 application#angular