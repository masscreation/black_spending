class AthleteTrainingSession < ActiveRecord::Base
	resourcify
  has_many :exercise_sets
  belongs_to :training_session
  belongs_to :athlete
  accepts_nested_attributes_for :exercise_sets, allow_destroy: true

  def as_json(options = {})
    super(options.merge(include: [:athlete, exercise_sets: {include: :athlete}]))
  end
end
