class Api::AthletesController < ApplicationController
  before_action :authenticate_athlete! 

  def index
  	respond_with :api, athletes
  end

  def show
    respond_with :api, athlete
  end

  def create
    respond_with :api, athlete.create(athlete_params)
  end

  def update
  	respond_with :api, athlete.update
  end

  def destroy
  	respond_with :api, athlete.destroy
  end

  private

  def athletes
  	@athletes ||= Athlete.all
  end

  def athlete 
  	@athlete ||= athletes.find(params[:id])
  end

  def athlete_params
  	params.require(:athlete).permit(:email, :username, :password, :type)
  end

end
