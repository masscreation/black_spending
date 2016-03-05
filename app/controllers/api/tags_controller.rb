class Api::TagsController < ApplicationController

  # GET api/tags
  def index
    respond_with :api, tags
  end

  # GET api/tags/1
  def show
    respond_with :api, tag
  end

  # POST /api/tags
  def create
    respond_with :api, Tag.create(tag_params)
  end

  # DELETE /api/tags
  def destroy
    respond_with :api, tag.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def tag
      @tag ||= tags.find(params[:id])
    end

    def tags
      @tags ||= Tag.all 
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tag_params
      params.require(:tag).permit(:name)
    end
end