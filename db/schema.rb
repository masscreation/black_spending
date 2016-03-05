# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160210174658) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "anatomical_adapations", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "athlete_training_sessions", force: :cascade do |t|
    t.datetime "scheduled_on"
    t.boolean  "complete"
    t.integer  "volume"
    t.integer  "training_session_id"
    t.integer  "athlete_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.integer  "training_routine_id"
  end

  add_index "athlete_training_sessions", ["athlete_id"], name: "index_athlete_training_sessions_on_athlete_id", using: :btree
  add_index "athlete_training_sessions", ["training_routine_id"], name: "index_athlete_training_sessions_on_training_routine_id", using: :btree
  add_index "athlete_training_sessions", ["training_session_id"], name: "index_athlete_training_sessions_on_training_session_id", using: :btree

  create_table "athletes", force: :cascade do |t|
    t.integer  "rank_id"
    t.integer  "height"
    t.integer  "weight"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "birthdate"
    t.integer  "level_id"
  end

  add_index "athletes", ["level_id"], name: "index_athletes_on_level_id", using: :btree

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "ancestry"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "categories", ["ancestry"], name: "index_categories_on_ancestry", using: :btree

  create_table "enrollments", force: :cascade do |t|
    t.integer  "athlete_id"
    t.integer  "training_routine_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "enrollments", ["athlete_id"], name: "index_enrollments_on_athlete_id", using: :btree
  add_index "enrollments", ["training_routine_id"], name: "index_enrollments_on_training_routine_id", using: :btree

  create_table "exercise_sets", force: :cascade do |t|
    t.boolean  "completed"
    t.integer  "athlete_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "tempo"
    t.integer  "load"
    t.integer  "rest"
    t.integer  "athlete_training_session_id"
    t.integer  "workout_exercise_id"
  end

  add_index "exercise_sets", ["athlete_training_session_id"], name: "index_exercise_sets_on_athlete_training_session_id", using: :btree
  add_index "exercise_sets", ["workout_exercise_id"], name: "index_exercise_sets_on_workout_exercise_id", using: :btree

  create_table "exercises", force: :cascade do |t|
    t.string   "name"
    t.text     "description",  null: false
    t.integer  "category_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.text     "instructions"
    t.string   "video_url"
  end

  create_table "hypertrophies", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "levels", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "maximum_strengths", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "periods", force: :cascade do |t|
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "duration_weeks"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "name"
    t.string   "type"
  end

  create_table "powers", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routine_tags", force: :cascade do |t|
    t.integer  "training_routine_id"
    t.integer  "tag_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trainers", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "training_routines", force: :cascade do |t|
    t.string   "name"
    t.string   "focus"
    t.integer  "duration_weeks"
    t.integer  "trainer_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "description"
    t.integer  "cost"
    t.boolean  "free_trial"
    t.integer  "free_trial_duration"
    t.string   "video_url"
  end

  add_index "training_routines", ["trainer_id"], name: "index_training_routines_on_trainer_id", using: :btree

  create_table "training_sessions", force: :cascade do |t|
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.integer  "training_routine_id"
    t.integer  "order_in_routine"
    t.string   "description"
    t.string   "session_type"
  end

  add_index "training_sessions", ["training_routine_id"], name: "index_training_sessions_on_training_routine_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username"
    t.string   "type"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "workout_exercises", force: :cascade do |t|
    t.integer  "workout_id"
    t.integer  "exercise_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "workout_exercises", ["exercise_id"], name: "index_workout_exercises_on_exercise_id", using: :btree
  add_index "workout_exercises", ["workout_id"], name: "index_workout_exercises_on_workout_id", using: :btree

  create_table "workouts", force: :cascade do |t|
    t.string   "name"
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "trainer_id"
  end

  add_index "workouts", ["trainer_id"], name: "index_workouts_on_trainer_id", using: :btree

  add_foreign_key "athlete_training_sessions", "athletes"
  add_foreign_key "athlete_training_sessions", "training_routines"
  add_foreign_key "athlete_training_sessions", "training_sessions"
  add_foreign_key "athletes", "levels"
  add_foreign_key "enrollments", "athletes"
  add_foreign_key "enrollments", "training_routines"
  add_foreign_key "exercise_sets", "athlete_training_sessions"
  add_foreign_key "exercise_sets", "workout_exercises"
  add_foreign_key "training_routines", "trainers"
  add_foreign_key "training_sessions", "training_routines"
  add_foreign_key "workout_exercises", "exercises"
  add_foreign_key "workout_exercises", "workouts"
  add_foreign_key "workouts", "trainers"
end
