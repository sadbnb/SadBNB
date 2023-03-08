class Apartment < ApplicationRecord
    has_many :interiors
    has_many :bookings
    has_many :users, through: :bookings
end
