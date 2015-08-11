class Api::UsersController < ApplicationController
  def index
  	respond_with :api, users
  end

  def create
    respond_with :api, User.create(user_params)
  end

  def update
  	respond_with :api, user.update
  end

  def destroy
  	respond_with :api, user.destroy
  end

  private

  def users
  	@users ||= User.all
  end

  def user 
  	@user ||= users.find(params[:id])
  end

  def user_params
  	params.require(:user).permit(:email, :username, :encrypted_password)
  end

end
