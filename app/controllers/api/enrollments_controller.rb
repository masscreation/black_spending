class Api::EnrollmentsController < ApplicationController
  	# before_action :authenticate_athlete!

  	def index 
	 	respond_with :api, enrollments
	end

	def show
		respond_with :api, enrollment
	end

	def create
		respond_with enrollment.create(enrollment_params)
	end

	def destroy
		respond_with :api, enrollment.destroy
	end

	private

		def enrollments
	    	@enrollments ||= Enrollment.all
	  	end

		def enrollment
		    @enrollment ||= enrollments.find(params[:id])
		end

		def enrollment_params
			params.require(:enrollment).permit(:athlete_id, :training_routine_id)
		end
end
