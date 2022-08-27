def vowel_count(string)
  increment = 0 
  vowels = ["a", "e", "i", "o", "u"]
  string.split("").each do |char|
    vowels.each do |vowel|
      increment += 1 if char == vowel
    end
  end
  increment
end

def remove_art(array)
  min = array[0]
  final_position = 0
  array.each do |number| 
    if number < min
      min = number 
      final_position = array.find_index(number)
    end 
  end
  puts final_position
  array.delete_at(final_position)
  array
end

def middle_char(given_string)
  length = given_string.length
  final_string = given_string[length/2] if length.odd?
  final_string = (given_string[length/2 - 1] + given_string[length/2])  if length.even?
  final_string
end

def the_jaden_way(given_string)
  given_string.length.times do |position|
    if given_string[position] == " "
      given_string[position +1] = given_string[position +1].upcase
    end  
  end
  given_string
end

def anti_troll(given_string)
  given_string.gsub(/[aeiou]/, '') 
end

def square_every_digit(number)
  given_string = number.to_s  
  result = ""
  given_string.split("").each { |integer| result += (integer.to_i ** 2).to_s}
  result
end

def filter_list(given_array)
  new_array = []
  given_array.each { |element| new_array.push(element) if element.class == Integer}
  new_array
end  

def maskify(given_string)
  return given_string if given_string.length < 5
  (given_string.length-4).times do |increment|
    given_string[increment]='#'
  end
  return given_string
end

def croquet_membership(given_array)
  final_array = []
  given_array.length.times do |increment|
    if given_array[increment][0] >= 55 && given_array[increment][1] >= 7
      final_array.push("Senior")
    else
      final_array.push("Open")
    end
  end
  final_array
end

def find_the_partity_outlier(given_array)
  if given_array[0].even?
    if given_array[1].even?
      given_array.each {|element| return element if element.odd?}
    else
      if given_array[2].even?
        return given_array[1]
      else
        return given_array[0]
      end
    end
  else
    if given_array[1].odd?
      given_array.each {|element| return element if element.even?}
    else
      if given_array[2].odd?
        return given_array[1]
      else
        return given_array[0]
      end
    end
  end
end

def shortest_word(given_string)
  
end

# puts vowel_count("pourquoi pas")
# puts remove_art([5, 4, 3, 8, 1, 2, 1])
# puts middle_char("testing")
# puts the_jaden_way("How can mirrors be real if our eyes aren't real")
# puts anti_troll("Non rien de rien, non je ne regrette rien")
# puts square_every_digit(9119)
# puts filter_list([1,2,'a','b',45])
# puts maskify("allobabar")
# puts croquet_membership([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
# puts find_the_partity_outlier([160, 3, 1719, 19, 11, 13, -21])
puts shortest_word("Somebody once told me the world was gonna roll me")