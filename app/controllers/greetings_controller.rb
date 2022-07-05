class GreetingsController < ApplicationController
  # before_action :set_greeting, only: %i[show edit update destroy]

  # GET /greetings or /greetings.json
  def index
    @random_greeting = Greeting.find(Greeting.ids.sample)
    render json: @random_greeting
  end

  # # GET /greetings/1 or /greetings/1.json
  # def show
  #   @greeting = Greeting.find(params[:id])
  #   respond_to do |format|
  #     format.html
  #     format.json { render json: @greeting }
  #   end
  # end
  # Only allow a list of trusted parameters through.
  def greeting_params
    params.fetch(:greeting, {})
  end
end
