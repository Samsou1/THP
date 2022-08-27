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

puts sum_of_3_or_5_multiples(16)

describe 'the multiple of 3 or 5 function' do
  it 'checks the argument is a multiple of 3 or 5' do
    expect(is_multiple_of_3_or_5?(3)).to eq(True)
    expect(is_multiple_of_3_or_5?(53)).to eq(False)
    expect(is_multiple_of_3_or_5?(50)).to eq(True)
  end
end

describe 'the sum of integers function' do
  it 'counts integers' do
    expect(sum_of_integers(11)).to eq(33)
    expect(sum_of_integers(13)).to eq(45)
    expect(sum_of_integers(16)).to eq(60)
  end
end