def sum_of_3_or_5_multiples(limit)
  return "Donne moi un nombre entier si tu veux que ça marche BG" if limit.class != Integer
  sum = 0
  limit.times do |int|
    sum += int if is_multiple_of_3_or_5?(int)
  end
  sum
end

def is_multiple_of_3_or_5?(n)
  return true if n%3 == 0 || n%5 ==0
  false
end

# puts sum_of_3_or_5_multiples(16)

