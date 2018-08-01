require "debug"
a, b, c = ARGV

puts "#{a}"

puts "#{b}"
puts "#{c}"
puts "Enter the value:"
str = $stdin.gets
puts str



ary = [  "fred", 10, 3.14, "This is a string", "last element", ]
ary.each do |i|
   puts i
end

