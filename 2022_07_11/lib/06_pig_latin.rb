def consonant?(str)
  consonant = %w[b c d f g h j k l m n p q qu r s t v w x y z]
  consonant.each { |letter| return true if str == letter }
  false
end

def translate(string)
  words = string.split
  words_letter_by_letter = words.map(&:chars)
  final_array = []

  words_letter_by_letter.each do |ary|
    (ary.length - 1).times do |increment|
      if ary[increment] == 'q' && ary[increment + 1] == 'u'
        ary[increment] = 'qu'
        ary.delete_at(increment + 1)
      end
    end
    ary.length.times do
      while consonant?(ary[0])
        ary.push(ary[0])
        ary.delete_at(0)
      end
    end
    ary.push('ay')
    final_array.push(ary.join)
  end
  final_array.join(' ')
end

# puts 'Bonjour, veuillez indiquer la phrase à traduire'
# print '>'
# puts translate(gets.chomp)
