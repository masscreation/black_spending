class Api::UsersController < ApplicationController

  def index
  	respond_with :api, users
  end

  def show
    respond_with :api, user
  end

  def create
    @user = User.create(user_params)
    respond_with :api, @user
    if @user.type = "Trainer"
      @user.add_role :trainer
    else
      @user.add_role :athlete
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
  	params.require(:user).permit(:email, :username, :encrypted_password, :type)
  end

end
