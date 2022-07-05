Rails.application.routes.draw do
  scope '/api' do
    resources :greetings, only: [:index]
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'static#index'
  get '*path', to: 'static#index'
end
