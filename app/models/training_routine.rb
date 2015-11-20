class TrainingRoutine < ActiveRecord::Base
  belongs_to :trainer
  has_many :enrollments
  has_many :athletes, through: :enrollments
  has_many :training_sessions, dependent: :destroy
  # accepts_nested_attributes_for :training_sessions
end
