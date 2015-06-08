class Api::TrainingSessionsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :index, :show]

  def index
    respond_with :api, training_sessions
  end

  def show
    respond_with :api, training_session
  end

  def create
    respond_with :api, TrainingSession.create(training_session_params)
  end

  def update
  end

  def destroy
  end

  private 

    def training_sessions
      @training_sessions ||= Widget.all
    end

    def widget
      @widget ||= widgets.find(params[:id])
    end

    def training_session_params
      params.permit(:scheduled_on, :complete, :volume, :category_id, :athlete_id, :period_id)
    end
end
