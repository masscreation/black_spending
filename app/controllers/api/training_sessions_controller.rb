class Api::TrainingSessionsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :index, :show]

  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
