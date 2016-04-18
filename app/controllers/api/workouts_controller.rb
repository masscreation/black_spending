class Api::WorkoutsController < ApplicationController

  # GET api/workouts
  def index
    respond_with :api, workouts
  end

  # GET api/workouts/1
  def show
    respond_with :api, workout
  end

  # POST /api/workouts
  def create
    respond_with :api, Workout.create(workout_params)
  end

  # DELETE /api/workouts
  def destroy
    respond_with :api, workout.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def workout
      @workout ||= workouts.find(params[:id])
    end

    def workouts
      @workouts ||= Workout.all 
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def workout_params
      params.require(:workout).permit(:name, :description, :user_id)
    end
end
