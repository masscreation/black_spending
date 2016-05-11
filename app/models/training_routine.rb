class TrainingRoutine < ActiveRecord::Base
	resourcify
	validates :name, :description, :focus, :duration, :sessions_per_week, 
			  :video_url, :cost, presence: true
	has_many :routine_tags
	has_many :tags, through: :routine_tags
	has_many :enrollments
	has_many :users, through: :enrollments
	has_many :training_sessions, dependent: :destroy
	accepts_nested_attributes_for :routine_tags

end
