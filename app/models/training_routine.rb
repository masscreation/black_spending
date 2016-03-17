class TrainingRoutine < ActiveRecord::Base
	resourcify
	has_many :routine_tags
	has_many :tags, through: :routine_tags
	belongs_to :trainer
	has_many :enrollments
	has_many :athletes, through: :enrollments
	has_many :training_sessions, dependent: :destroy
	accepts_nested_attributes_for :routine_tags

end
