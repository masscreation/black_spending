class Api::AthletesController < ApplicationController
  def index
  	respond_with :api, athletes
  end

  def create
    respond_with :api, Athlete.create(user_params)
  end

  def update
  	respond_with :api, Athlete.update
  end

  def destroy
  	respond_with :api, Athlete.destroy
  end

  private

  def athletes
  	@athletes ||= Athlete.all
  end

  def athlete 
  	@athlete ||= Athlete.find(params[:id])
  end

  def athlete_params
  	params.require(:athlete).permit(:email, :username, :encrypted_password)
  end

end
