Rails.application.routes.draw do
  get 'task/index'

  get 'welcome/index'

  root 'welcome#index'
end
