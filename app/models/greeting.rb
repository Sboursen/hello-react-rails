class Greeting < ApplicationRecord
  validates :message, presence: true, length: { maximum: 1000 }
  validates :language, presence: true, length: { maximum: 2000 }
end
