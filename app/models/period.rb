class Period < ActiveRecord::Base
	belongs_to :athete
	has_many :training_sessions
end
