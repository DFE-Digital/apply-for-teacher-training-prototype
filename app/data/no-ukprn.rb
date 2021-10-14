require 'json'


json = JSON.parse(File.read('./degree-institutions.js'))

count = 0

json.each do |org|

  count += 1

  puts org["name"] unless org["ukprn"]

end

puts count
