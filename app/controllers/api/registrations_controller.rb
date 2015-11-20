class Api::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  
  def create
    respond_with :api, Athlete.create(athlete_params)
  end

  private

    def trainer_params
      params.require(:trainer).permit(:email, :username, :password)
    end

    def athlete_params
    	params.require(:athlete).permit(:email, :username, :password)
    end

end