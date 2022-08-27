

def check_if_win
  winning_combination = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
  crosses = ['x','','x','','','','','','']
  circles = ['','','','','','','','','']
  winning_combination.each do |ary|
    winning_element_for_x = 0
    winning_element_for_o = 0
    ary.length.times do|index|
      if crosses[ary[index]-1].downcase == "x"
        winning_element_for_x += 1
        return [true,'x'] if winning_element_for_x == 3
      elsif circles[ary[index]-1].downcase == "o"
        winning_element_for_o += 1
        return [true,'o'] if winning_element_for_o == 3
      end
    end
  end
  return "false"
end

puts check_if_win