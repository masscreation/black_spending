json.array!(@workouts) do |workout|
  json.extract! workout, :id, :name, :description, :training_program_id
  json.url workout_url(workout, format: :json)
end
