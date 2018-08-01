name = Hash["first" => "atul" , "last" => "jain"]
puts "#{name["first"]}"
puts name.keys
puts name.delete("firs"){ |e| "#{e} is not found"}
puts name.keys
puts name.each{|key,value| puts "#{key} is #{value}"}
puts name.index("atul")
name1 = name.invert
puts name1
puts name.merge(name1)
# puts name.clear

h = Hash.new {|h,k| h[k] = k.to_i*10}   #=> {}
puts h.default                               #=> nil
puts h.default(4)

h1 = Hash.new
puts h1
puts h1.default = "atul"
puts h1


puts "hello"