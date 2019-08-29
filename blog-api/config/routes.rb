Rails.application.routes.draw do

  resources :posts do
    resources :comments
  end

  resources :categories do
    resources :comments
  end

  mount ActionCable.server => '/cable'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
