class Greeting < ApplicationRecord
  validates :message, presence: true, length: { maximum: 1000 }
end
