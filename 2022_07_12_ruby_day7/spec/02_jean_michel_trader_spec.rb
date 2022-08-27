require_relative '../lib/02_jean_michel_trader'

describe 'this function should return the day of buy and the day of sell in an array' do
  it 'should return the correct array with [day buy, day sell]' do
    expect(day_trader([5,4,6,5])).to eq([2,3])
    expect(day_trader([10,12,11,16,13,8,12,13,15,20,13,12,13])).to eq([6,10])
    expect(day_trader([25,15,13,15,12,5,13,15,19,12,13,12,11])).to eq([6,9])
  end
  it 'should return an error message if the argument in not an array of numbers' do
    expect(day_trader(42)).to eq("Wait you're supposed to give me an array")
    expect(day_trader([])).to eq("Wait you're supposed to give me an array with more than 2 numbers")
    expect(day_trader([6,5,4,3,2,1])).to eq("Well you should buy on the last day which means I don't know when to sell") 
    expect(day_trader([5,4,"test"])).to eq("Wait, you're not only giving me numbers")
  end
end