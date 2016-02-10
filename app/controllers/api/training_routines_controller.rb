class Api::TrainingRoutinesController < ApplicationController
	# before_action :authenticate_trainer!

	def index 
	 	respond_with :api, training_routines
	end

	def show
		respond_with :api, training_routine
	end

	def create
		respond_with :api, TrainingRoutine.create(training_routine_params)
		# 144.times do 
		# 	training_routine.build
			
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
			params.require(:training_routine).permit(:name, :description, :focus, :trainer_id, :duration_weeks, :video_url, :cost, :free_trial, :free_trial_duration)
		end
end
