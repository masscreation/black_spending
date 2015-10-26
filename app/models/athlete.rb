class Athlete < User
	has_many :exercise_sets
	has_many :enrollments
	has_many :training_routines, through: :enrollments
	validates :email, :password, presence: true 
	validates :email, :username, uniqueness: true
end
