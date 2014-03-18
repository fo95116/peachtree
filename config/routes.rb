Peachtree::Application.routes.draw do

  root to: 'environments#index'
  resources :environments
end
