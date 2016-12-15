Rails.application.routes.draw do
  get 'category/index'

  get 'welcome/index'

  resources :task
  resources :category

  root 'welcome#index'
end
