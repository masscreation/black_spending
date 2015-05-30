class ExercisesController < ApplicationController
  before_action :set_exercise, only: [:show, :edit, :update, :destroy]

  # GET /exercises
  # GET /exercises.json
  def index
    @category = Category.find(params[:category_id])
    @exercises = Exercise.all
  end

  # GET /exercises/1
  # GET /exercises/1.json
  def show
    @category = Category.find(params[:category_id])
  end

  # GET /exercises/new
  def new
    @workout_options = Workout.all.map { |workout| [workout.name, workout.id] }
    @category = Category.find(params[:category_id])
    @exercise = Exercise.new
  end

  # GET /exercises/1/edit
  def edit
    @category = Category.find(params[:category_id])
    @workout_options = Workout.all.map { |workout| [workout.name, workout.id] }
  end

  # POST /exercises
  # POST /exercises.json
  def create
    @exercise = Exercise.new(exercise_params)
    @category = Category.find(params[:category_id])
    # if @exercise.save 
    #   redirect_to category_exercises_path(@category.id)
    # end

    respond_to do |format|
      if @exercise.save
        @category.exercises << @exercise
        format.html { redirect_to [@category, @exercise], notice: 'Exercise was successfully created.' }
        format.json { render :show, status: :created, location: @exercise }
      else
        format.html { render :new }
        format.json { render json: @exercise.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exercises/1
  # PATCH/PUT /exercises/1.json
  def update
    respond_to do |format|
      if @exercise.update(exercise_params)
        format.html { redirect_to category_exercise_path, notice: 'Exercise was successfully updated.' }
        format.json { render :show, status: :ok, location: @exercise }
      else
        format.html { render :edit }
        format.json { render json: @exercise.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exercises/1
  # DELETE /exercises/1.json
  def destroy
    @exercise.destroy
    respond_to do |format|
      format.html { redirect_to category_path(@category.id), notice: 'Exercise was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercise
      @exercise = Exercise.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exercise_params
      params.require(:exercise).permit(:name, :description, :instructions, :category_id, :workout_id)
    end
end
