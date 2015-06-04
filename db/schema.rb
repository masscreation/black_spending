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

ActiveRecord::Schema.define(version: 20150601220243) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "ancestry"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "categories", ["ancestry"], name: "index_categories_on_ancestry", using: :btree

  create_table "exercise_sets", force: :cascade do |t|
    t.boolean  "completed"
    t.integer  "athlete_id"
    t.integer  "training_session_id"
    t.integer  "exercise_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "exercises", force: :cascade do |t|
    t.string   "name"
    t.text     "description",  null: false
    t.integer  "category_id"
    t.integer  "workout_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.text     "instructions"
  end

  create_table "period_types", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "periods", force: :cascade do |t|
    t.string   "name"
    t.date     "start_date"
    t.date     "end_date"
    t.integer  "duration_weeks"
    t.integer  "period_type_id"
    t.integer  "user_id"
    t.integer  "training_program_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  create_table "training_sessions", force: :cascade do |t|
    t.datetime "scheduled_on"
    t.boolean  "complete"
    t.integer  "volume"
    t.integer  "category_id"
    t.integer  "athlete_id"
    t.integer  "period_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.string   "name"
    t.text     "description",         null: false
    t.integer  "training_program_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

end
