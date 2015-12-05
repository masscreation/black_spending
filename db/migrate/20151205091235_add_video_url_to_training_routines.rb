class AddVideoUrlToTrainingRoutines < ActiveRecord::Migration
  def change
    add_column :training_routines, :video_url, :string
  end
end
