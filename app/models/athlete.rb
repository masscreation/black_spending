class Athlete < User
	has_many :exercise_sets
	has_many :athlete_training_sessions
	has_many :enrollments
	has_many :training_routines, through: :enrollments
	validates :email, :password, presence: true 
	validates :email, :username, uniqueness: true

	def get_age
		return nil unless birthdate.present
		Date.today.year - birthdate.year
	end

end
