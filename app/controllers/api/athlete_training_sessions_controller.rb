class Api::AthleteTrainingSessionsController < ApplicationController
  #before_filter :authenticate_user!, only: [:create, :index, :show]

  def index
    respond_with :api, athlete_training_sessions
  end

  def show
    respond_with :api, athlete_training_session
  end

  def create
    respond_with :api, athlete_training_session.create(athlete_training_session_params)
  end

  def update
  end

  def destroy
    respond_with :api, athlete_training_session.destroy
  end

  private 

    def athlete_training_sessions
        @athlete_training_sessions ||= TrainingSession.all
    end

    def athlete_training_session
        @athlete_training_session ||= athlete_training_sessions.find(params[:id])
    end

    def athlete_training_session_params
      params.require(:athlete_training_session).permit(:scheduled_on, :complete, :volume, :athlete_id, :training_session_id,  
        exercise_set_attributes: [:exercise_id, :athlete_id, :completed])
    end
end

