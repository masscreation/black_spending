class Enrollment < ActiveRecord::Base
  belongs_to :training_regimen
  belongs_to :athlete
end
