class Enrollment < ActiveRecord::Base
	resourcify
  belongs_to :training_routine
end
