class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    #
    #   user ||= User.new # guest user (not logged in)
      if user.has_role? :admin
        can :manage, :all
      else
        can :read, :all
      end

      if user.has_role? :athlete 
        can :read, :athlete_training_sessions
        can :read, :training_routines
        can :update, :athlete_training_sessions
        can :read, :exercise_sets
        can :update, :exercise_sets
      end

      if user.has_role? :trainer 
        can :create, :training_routines
        can :create, :workouts
        can :create, :exercises
        can :read, :training_routines
        can :read, :workouts
        can :read, :exercises
        can :update, :training_routines
        can :update, :workouts
        can :update, :exercises
      end 

    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities
  end
end
