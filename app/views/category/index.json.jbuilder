json.categories @categories do |c|
  json.partial! 'category/show', category: c
end
