class Api::TrainingSessionsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :index, :show]

  def index
    respond_with :api, training_sessions
  end

  def show
    respond_with :api, training_session
  end

  def create
    respond_with :api, TrainingSession.create(training_routine_params)
  end


  def destroy
    respond_with :api, training_session.destroy
  end

  private 

    def training_sessions
        @training_sessions ||= TrainingSession.all
    end

    def training_session
        @training_session ||= training_sessions.find(params[:id])
    end

    def training_session_params
      params.require(:training_session).permit(:session_type, :description, :training_routine_id, :order_in_routine, :period_id)
    end
end
