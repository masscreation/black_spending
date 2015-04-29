# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
weight_training    = Category.create(name: "Weight Training",  description: "Anatomical adaptation, hypertrophy, 
											                                strength, and power training through 
											                                a sport-specific range of motion, to 
											                                enhance peak performance.")
	strength = weight_training.children.create(name: "Strength Training", description: "Hypertrophy and maximum strength training.")
		upper_body_strength = strength.children.create(name: "Upper Body Strength", description: "Weight training exercises for building upper body strength")
			upper_body_multijoint   = upper_body_strength.children.create(name: "Upper Body, Multijoint", description: "Upper body multijoint exercises") 
			upper_body_single_joint = upper_body_strength.children.create(name: "Upper Body, Single-joint", description: "Upper body single-joint exercises")
		lower_body_strength = strength.children.create(name: "Lower Body Strength", description: "Weight training exercises for building lower body strength")
			lower_body_multijoint   = lower_body_strength.children.create(name: "Lower Body, Multijoint", description: "lower body multijoint exercises")
			lower_body_single_joint = lower_body_strength.children.create(name: "Lower Body, Single-joint", description: "Lower body single-joint exercises")
		core_strength       = strength.children.create(name: "Core Strength", description: "Weight training exercises for building core strength.")
	power    = weight_training.children.create(name: "Power Training", description: "Olympic, plyometric, and ballistic exercises for building power.")
	    upper_body_power    = power.children.create(name: "Upper Body Power", description: "Weight training exercises for building upper body power.")
	    lower_body_power    = power.children.create(name: "Lower Body Power", description: "Weight training exercises for building lower body power.")
	    core_power          = power.children.create(name: "Core Power", description: "Weight training exercises for building power in the core.")

speed_training     = Category.create(name: "Speed Training", description: "Exercises designed to inrease speed and 
																		  speed endurance.")
	bursts_sprints      = speed_training.children.create(name:"Bursts and Sprints", description: "Shorter drills for developing speed.")
	speed_endurance     = speed_training.children.create(name:"Speed endurance drills",    description: "Longer speed drills for developing speed endurance.")

db_drills          = Category.create(name: "DB Drills", description: "Drills for developing your technique, and 
	         															breaking on every conceivable route.")
	basic_db_drills     = db_drills.children.create(name: "Basic DB Drills", description: "Drills for breaking on basic, one-move routes 
																							(e.g. slants, outs, etc.).")
	advanced_db_drills  = db_drills.children.create(name: "Advanced DB Drills", description: "Drills for breaking on double-move routes. 
																								(e.g. whip-route, out-n-ups, hitch-n-gos, etc.).")
	long_db_drills      = db_drills.children.create(name: "Long DB Drills", description: "Longer DB drills for developing technical endurance.")

footwork_agility   = Category.create(name: "Footwork/Agility", description: "Drills for improving your ability to 
	             											                 quickly change direction.")
	ladder_drills       = footwork_agility.children.create(name: "Ladder Drills", description: "Drills for developing quick, efficient foot placement.")
	combine_agility     = footwork_agility.children.create(name: "Combine Agility Drills", description: "Combine drills for improving your ability to 
																										 to quickly change direction.")             											                  

flexibility        = Category.create(name: "Flexibility", description: "Static and dynamic stretching exercises for 
    																    improving your range of motion.")
	dynamic_flexibility = flexibility.children.create(name: "Dynamic Flexibility", description: "Stretching exercises for developing flexibility through a dynamic range of motion.")
	static_flexibility  = flexibility.children.create(name: "Static Flexibility", description: "Static stretching exercises for developing flexibility. ")
