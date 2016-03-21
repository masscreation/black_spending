class Api::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  
  def create
    respond_with :api, User.create(user_params)
  end

  private

    def user_params
      params.require(:user).permit(:email, :username, :password)
    end

end