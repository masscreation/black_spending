class ExerciseSet < ActiveRecord::Base
	belongs_to :exericse
	belongs_to :athlete
	belongs_to :training_session
end
