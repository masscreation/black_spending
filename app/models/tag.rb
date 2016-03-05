class Tag < ActiveRecord::Base
	has_many :routine_tags
	has_many :training_routines, through: :routine_tags
end
