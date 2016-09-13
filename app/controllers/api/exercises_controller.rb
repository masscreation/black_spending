class Api::ExercisesController < ApplicationController
  

  # GET /exercises.json
  def index 
    respond_with :api, exercises
  end

  # GET /exercises/1.json
  def show
    respond_with :api, exercise
  end

  def update
    respond_with :api, exercise.update(exercise_params)
  end

  # POST /exercises.json
  def create
    respond_with :api, Exercise.create(exercise_params)
  end

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
      params.require(:exercise).permit(:id, :name, :description, :instructions, :category_id, :video_url, :updated_at, :created_at)
    end
end
