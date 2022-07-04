class AddLanguageToGreetings < ActiveRecord::Migration[7.0]
  def change
    add_column :greetings, :language, :string
  end
end
