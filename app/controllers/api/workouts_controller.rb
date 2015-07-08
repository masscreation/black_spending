class Api::WorkoutsController < ApplicationController

  # GET /workouts
  # GET /workouts.json
  def index
    respond_with :api, workouts
  end

  # GET /workouts/1
  # GET /workouts/1.json
  def show
    respond_with :api, workout
  end

  # POST /workouts
  # POST /workouts.json
  def create
    respond_with :api, Workout.create(workout_params)
  end

  # PATCH/PUT /workouts/1
  # PATCH/PUT /workouts/1.json

  # DELETE /workouts/1
  # DELETE /workouts/1.json
  def destroy
    respond_with :api, workout.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_workout
      @workout = Workout.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def workout_params
      params.require(:workout).permit(:name, :description, :training_program_id)
    end
end
