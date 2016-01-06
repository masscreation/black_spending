class Api::LevelsController < ApplicationController
  def index
  	respond_with :api, levels
  end

  def show
  	respond_with :api, level
  end

  def create
  	respond_with :api, level
  end

  def destroy
  	respond_with :api, level
  end

  private 

	  def levels
	  	@levels ||= Level.all
	  end

	  def level 
	  	@level ||= levels.find(params[:id])
	  end
end
