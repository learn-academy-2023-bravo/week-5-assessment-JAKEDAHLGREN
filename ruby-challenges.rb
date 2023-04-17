# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Pseudo
# Input: array and letter
# Output: array with only words containing that letter
# Declare a function called letter_inside with the parameters (array, letter)
# Use .select (Rubys version of .filter) to iterate through the array and search for the given string 
# Create a block that passes string through pipes
# The .select iterates through the array, and if the array element/string.includes? the letter, it returns true, which tells .select to keep the string value in the array. If string.includes? returns false, .select will leave the string out of the printed array.
# Print the function with the beverages_array and the string variable

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


def letter_inside(array, letter)
   array.select do |string| 
   string.include?(letter)
    end
end
    p letter_inside(beverages_array,letter_o)
# Output:["coffee", "soda water"]
    p letter_inside(beverages_array,letter_t)
# Output: ["tea", "water", "soda water"]


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Pseudo

# Declare a method called no_nest with the parameter hash
# Set a new variable called values
# Set values equal to the hash.values.flatten 
# The .flatten method removes the {}, and hash.values looks at only the values, without the keys
# Then take values and use the sort method with the bang operator, this will store the sorted results in an array
#  print no_nest with the arguement (us_states)

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }

# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


def no_nest hash
  values = hash.values.flatten
  values.sort! 
end
  p no_nest(us_states)
  # Output: ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo

# Declare a class called Bike
# define an initialize method with the parameters model, wheels, and current_speed
# set @model = model, @wheels = 2, @current_speed = 0
# Now define a method called bike_info
# use string interpilation with all 3 parameters from the class Bike
# create a new instance of Bike called my_bike with the provided information
# Use dot notation to print the new instance(object) with the bike_info method string interpolation my_bike.bike_info

class Bike 
  def initialize (model, wheels, current_speed)
  @model = model
  @wheels = 2
  @current_speed = 0
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph." 
  end
end
my_bike = Bike.new('Trek', 'wheels', 'current_speed')
p my_bike.bike_info

# Output: "The Trek bike has 2 wheels and is going 0 mph."


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo

# Define a method pedal_faster that passes pedal so you can update the current_speed
# Set @current_speed += pedal, so can it add the current_speed to the given pedal speed
# Repeat for method called brake passing braking
# Instead of += I need to set @current_speed -= braking so it subtracts braking speed from current_speed
# I also need to set @current_speed with a condition that won't allow negative numbers
# I first tried an if statement saying that if current_speed < 0, return 0 (which didn't work)
# I found the .max method which allows you to set [0, @current_speed].max, so when your given breaking speed is greater than current speed, .max will not allow it to go negative
# Set up my_bike with the given pedal_faster arguments, and print my_bike.bike_info to update @current speed
# Same process for the brake method

class Bike 
  def initialize (model, wheels, current_speed)
  @model = model
  @wheels = 2
  @current_speed = 0
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph." 
  end

  def pedal_faster pedal
  @current_speed += pedal
  end

  def brake braking
  @current_speed -= braking
  @current_speed = [0, @current_speed].max
  # I tried this before I found the .max accessor
  # @current_speed >= 0 
  #   if @current_speed < 0
  #    return 0
  #   end
  end
end
my_bike = Bike.new('Trek', 'wheels', 'current_speed')
# p my_bike.bike_info
my_bike.pedal_faster(10)
p my_bike.bike_info
my_bike.pedal_faster(18)
p my_bike.bike_info
my_bike.brake(5)
p my_bike.bike_info
my_bike.brake(25)
p my_bike.bike_info