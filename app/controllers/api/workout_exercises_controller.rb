class Api::WorkoutExercisesController < ApplicationController

  # GET api/workouts
  def index
    respond_with :api, workout_exercises
  end

  # GET api/workouts/1
  def show
    respond_with :api, workout_exercise
  end

  # POST /api/workouts
  def create
    respond_with :api, WorkoutExercise.create(workout_exercise_params)
  end

  # DELETE /api/workouts
  def destroy
    respond_with :api, workout_exercise.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def workout_exercise
      @workout_exercise ||= workout_exercises.find(params[:id])
    end

    def workout_exercises
      @workout_exercises ||= WorkoutExercise.all 
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def workout_exercise_params
      params.require(:workout_exercises).permit(:exercise_id, :workout_id, :training_session_id)
    end
end