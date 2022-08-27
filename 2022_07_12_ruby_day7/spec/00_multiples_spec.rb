require_relative '../lib/00_multiples'

describe 'the multiple of 3 or 5 function' do
  it 'should return true when the integer is a multiple of 3 or 5' do
    expect(is_multiple_of_3_or_5?(3)).to eq(true)
    expect(is_multiple_of_3_or_5?(50)).to eq(true)
  end
  it 'should return false when the integer is nota multiple of 3 or 5' do
    expect(is_multiple_of_3_or_5?(4)).to eq(false)
    expect(is_multiple_of_3_or_5?(17)).to eq(false)
    expect(is_multiple_of_3_or_5?(53)).to eq(false)
  end
end

describe 'the sum of integers function' do
  it 'counts integers' do
    expect(sum_of_3_or_5_multiples(11)).to eq(33)
    expect(sum_of_3_or_5_multiples(13)).to eq(45)
    expect(sum_of_3_or_5_multiples(16)).to eq(60)
  end
  it 'refuses the entree' do
    expect(sum_of_3_or_5_multiples(11.2)).to eq("Donne moi un nombre entier si tu veux que ça marche BG")
    expect(sum_of_3_or_5_multiples("13")).to eq("Donne moi un nombre entier si tu veux que ça marche BG")
  end
end