class Api::RoutineTagsController < ApplicationController

  # GET api/routine_tags
  def index
    respond_with :api, routine_tags
  end

  # GET api/routine_tags/1
  def show
    respond_with :api, routine_tag
  end

  # POST /api/routine_tags
  def create
    respond_with :api, RoutineTag.create(routine_tag_params)
  end

  # DELETE /api/routine_tags
  def destroy
    respond_with :api, routine_tag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def routine_tag
      @routine_tag ||= routine_tags.find(params[:id])
    end

    def routine_tags
      @routine_tags ||= RoutineTag.all 
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def routine_tag_params
      params.require(:routine_tag).permit(:name, :tag_id, :training_routine_id)
    end
end