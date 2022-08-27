require_relative '../lib/01_crypto'

describe 'this function should return the encoded message shifted by the key' do
  it 'should return the right encoded message' do
    expect(caesar_cipher?("This is a test",1)).to eq("Uijt jt b uftu")
    expect(caesar_cipher?("What a string!", 5)).to eq("Bmfy f xywnsl!")
    expect(caesar_cipher?("This is the ULTIMATE test, if succeed this test, your program probably works!!! abcdefghijklopABCDEFGHIJKLMNOP", 10)).to eq("Drsc sc dro EVDSWKDO docd, sp cemmoon drsc docd, iyeb zbyqbkw zbylklvi gybuc!!! klmnopqrstuvyzKLMNOPQRSTUVWXYZ")
  end
  it 'should return an error when there are not only letters in  the message' do
    expect(caesar_cipher?(42,)).to eq("Wait, you're also giving me numbers")
    expect(caesar_cipher?("Bonjour C3PO")).to eq("Wait, you're also giving me numbers")
    expect(caesar_cipher?([53,2])).to eq("Wait, you're also giving me numbers")
  end
end