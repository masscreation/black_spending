class Api::TrainingRoutinesController < ApplicationController

	def index 
	 	respond_with :api, training_routines
	end

	def show
		respond_with :api, training_routine
	end

	def create
		respond_with TrainingRoutine.create(category_params)
	end

	def destroy
		respond_with :api, training_routine.destroy
	end

	private

		def training_routines
	    	@training_regimens ||= TrainingRoutine.all
	  	end

		def training_routine
		    @training_regimen ||= training_routines.find(params[:id])
		end

		def training_routine_params
			params.require(:training_routine).permit(:name, :focus, :trainer_id)
		end
end
