class TrainingRoutine < ActiveRecord::Base
  belongs_to :trainer
  has_many :training_sessions
  has_many :athletes, through: :training_sessions
end
