class Api::TrainersController < ApplicationController
  def index
  	respond_with :api, trainers
  end

  def create
    respond_with :api, Trainer.create(user_params)
  end

  def update
  	respond_with :api, Trainer.update
  end

  def destroy
  	respond_with :api, Trainer.destroy
  end

  private

  def trainers
  	@trainers ||= Trainer.all
  end

  def trainer 
  	@trainer ||= Trainer.find(params[:id])
  end

  def trainer_params
  	params.require(:trainer).permit(:email, :username, :encrypted_password)
  end

end
