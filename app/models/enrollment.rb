class Enrollment < ActiveRecord::Base
  belongs_to :athlete
  belongs_to :training_routine
end
