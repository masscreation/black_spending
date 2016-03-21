class Api::TrainersController < ApplicationController

  def index
  	respond_with :api, trainers
  end

  def show
    respond_with :api, trainer
  end

  def create
    @trainer = Trainer.create(trainer_params)
    respond_with :api, @trainer
    @trainer.add_role :trainer
  end

  def update
  	respond_with :api, trainer.update
  end

  def destroy
  	respond_with :api, trainer.destroy
  end

  private

  def trainers
  	@trainers ||= Trainer.all
  end

  def trainer 
  	@trainer ||= trainers.find(params[:id])
  end

  def trainer_params
  	params.require(:trainer).permit(:email, :username, :encrypted_password, :type)
  end

end
