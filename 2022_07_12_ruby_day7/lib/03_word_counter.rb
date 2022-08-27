file = File.open("shakespeare.txt")
file_data = file.read

def word_counter(corpus, dictionnary)
  final_hash = Hash.new(0)
  corpus_by_letters = corpus.chars
  number_of_letters = corpus_by_letters.size
  number_of_letters.times do |position|
    (number_of_letters - position).times do |tested_length|
      if is_part_of_dictionnary?(corpus_by_letters[position..(position + tested_length)].join, dictionnary)
        final_hash[corpus_by_letters[position..(position + tested_length)].join.downcase] += 1
      end
    end
  end
  final_hash
end

def is_part_of_dictionnary?(str, dictionnary)
  dictionnary.each {|word| return true if str.downcase == word.downcase}
  false
end

def word_counter_text(corpus, dictionnary)
  final_hash = Hash.new(0)
  dictionnary.each {|word| final_hash[word] = 0}
  corpus_by_word = corpus.split
  corpus_by_word.each {|word| final_hash[word.downcase] += 1 if is_part_of_dictionnary?(word, dictionnary)}
  final_hash
end

dict = ["below", "down", "go", "going", "horn", "how", "howdy", "it", "i", "low", "own", "part", "partner", "sit"]
dict_shak = ["the", "of", "and", "to", "a", "in", "for", "is", "on", "that", "by", "this", "with", "i", "you", "it", "not", "or", "be", "are"]
# puts word_counter("Howdy partner, sit down! How's it going?", dict)
puts word_counter_text(file_data, dict_shak)
# puts word_counter_text("I'm down below, going home. How have you been partner?", dict)