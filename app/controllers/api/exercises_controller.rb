class Api::ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :edit, :update, :destroy]

  # GET /exercises
  # GET /exercises.json
  def index 
    respond_with :api, exercises
  end

  # GET /exercises/1
  # GET /exercises/1.json
  def show
    respond_with :api, exercise
  end

  # POST /exercises
  # POST /exercises.json
  def create
    respond_with :api, Exercise.create(exercise_params)
  end

  # PATCH/PUT /exercises/1
  # PATCH/PUT /exercises/1.json

  # DELETE /exercises/1
  # DELETE /exercises/1.json
  def destroy
   respond_with :api, exercise.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def exercises
      @exercises ||= Exercise.all
    end

    def exercise
      @exercise ||= exercises.find(params[:id])
   end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exercise_params
      params.require(:exercise).permit(:name, :description, :instructions, :category_id, :workout_id)
    end
end
