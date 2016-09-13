class AthleteTrainingSession < ActiveRecord::Base
	resourcify
  has_many :exercise_sets
  belongs_to :training_session
  accepts_nested_attributes_for :exercise_sets, allow_destroy: true

  def as_json(options = {})
    super(options.merge(include: [:user, exercise_sets: {include: :user}]))
  end
end
