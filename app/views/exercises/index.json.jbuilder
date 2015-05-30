json.array!(@exercises) do |exercise|
  json.extract! exercise, :id, :name, :description, :category_id, :workout_id
  json.url exercise_url(exercise, format: :json)
end
