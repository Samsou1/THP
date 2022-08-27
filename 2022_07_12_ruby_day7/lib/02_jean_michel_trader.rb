def day_trader(ary)
  return "Wait you're supposed to give me an array" if ary.class != Array
  return "Wait you're supposed to give me an array with more than 2 numbers" if ary.length < 3
  ary.each{|item| return "Wait, you're not only giving me numbers" if item.class != Integer }
  day_buy = ary.find_index(ary.min) + 1
  return "Well you should buy on the last day which means I don't know when to sell" if day_buy == ary.length
  day_sell = ary.find_index(ary[day_buy..((ary.length) -1)].max) + 1
  [day_buy, day_sell]
end
