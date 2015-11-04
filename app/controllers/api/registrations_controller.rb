class Api::RegistrationsController < Devise::RegistrationsController
  
  def create
    respond_with :api, Athlete.create(athlete_params)
  end

  private

  def trainer_params
    params.require(:trainer).permint(:email, :username, :encrypted_password)
  end

  def athlete_params
  	params.require(:athlete).permit(:email, :username, :encrypted_password)
  end

end