class Api::TrainingRoutinesController < ApplicationController
	# before_action :authenticate_trainer!

	def index 
	 	respond_with :api, training_routines
	end

	def show
		respond_with :api, training_routine
	end

	def create
		@new_training_routine = TrainingRoutine.create(training_routine_params)
		respond_with :api, @new_training_routine
		(@new_training_routine.duration_weeks ** @new_training_routine.sessions_per_week).times do 
			@new_training_routine.training_sessions.build
			order = 1 
			@new_training_routine.training_sessions.each do |session|
				session.order_in_routine = order
				session.save
				order = order + 1 
			end
		end
	end

	def destroy
		respond_with :api, training_routine.destroy
	end

	private

		def training_routines
	    	@training_routines ||= TrainingRoutine.all
	  	end

		def training_routine
		    @training_routine ||= training_routines.find(params[:id])
		end

		def training_routine_params
			params.require(:training_routine).permit(:name, :description, :focus, :user_id, :duration_weeks, :video_url, :cost, :free_trial, :free_trial_duration, :sessions_per_week)
		end
end
