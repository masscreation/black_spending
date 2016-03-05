class RoutineTag < ActiveRecord::Base
	belongs_to :training_routine
	belongs_to :tag 
end
