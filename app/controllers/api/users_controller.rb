class UsersController < ApplicationController
  def index
    @users = User.all
  	respond_with @users.json
  end

  def create
  	respond_with User.create(user_params)
  end

  def update
  	respond_with user.update
  end

  def destroy
  	respond_with user.destroy
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
