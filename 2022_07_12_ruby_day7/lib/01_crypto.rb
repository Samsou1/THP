def caesar_cipher?(code, key = 1)
  letters = code.to_s.chars
  ascii_up = Array.new(26) {|i| i+65}
  ascii_lo = Array.new(26) {|i| i+97}
  final_string = ""
  letters.each do |letter|
    ascii_code = letter.ord
    if ascii_up.include?(ascii_code)
      if ascii_code + key <= ascii_up[(ascii_up.size)-1]
        final_string += (ascii_code + key).chr
      else
        final_string += (ascii_code + key - 26).chr
      end
    elsif ascii_lo.include?(ascii_code)
      if ascii_code + key <= ascii_lo[(ascii_lo.size)-1]
        final_string += (ascii_code + key).chr
      else
        final_string += (ascii_code + key - 26).chr
      end
    elsif ascii_code <= 57 && ascii_code >= 48
      return "Wait, you're also giving me numbers"
    else
      final_string += ascii_code.chr
    end
  end
  final_string
end
