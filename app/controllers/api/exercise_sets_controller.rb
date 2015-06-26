class Api::ExerciseSetsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def index
  	respond_with :api, exercise_sets
  end

  def create
  	respond_with :api, trainings_session.exercise_set.create(exercise_set_params.merge(user_id: current_user.id))
  end

  def update
  end

  def destroy
  	respond_with :api, exercise_set.destroy
  end

  private

  	def exercise_sets
    	@exercises ||= Exercise.all
  	end

	def exercise_set
	    @exercise_set ||= exercise_sets.find(params[:id])
	end

	def exercise_set_params
		params.require(:exercise_set).permit(:athlete_id, :training_session_id, :exercise_id, :completed)
	end
end
