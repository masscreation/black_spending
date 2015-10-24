class Api::TrainingRoutinesController < ApplicationController
	# before_action :authenticate_trainer!

	def index 
	 	respond_with :api, training_routines
	end

	def show
		respond_with :api, training_routine
	end

	def create
		respond_with training_routine.create(training_routine_params)
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
			params.require(:training_routine).permit(:name, :description, :focus, :duration, :trainer_id)
		end
end
