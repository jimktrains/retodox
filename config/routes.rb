Rails.application.routes.draw do
  get 'welcome/index'

  resources :task

  root 'welcome#index'
end
