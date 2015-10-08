class Athlete < User
	has_many :exercise_sets
	has_many :training_sessions
	has_many :training_routines, through: :training_sessions
end
