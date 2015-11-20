class Trainer < User
	has_many :training_routines
	has_many :workouts
end
