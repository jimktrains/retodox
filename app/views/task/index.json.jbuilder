json.tasks @tasks do |task|
  json.partial! 'task/show', task: task
end
