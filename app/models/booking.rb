class Booking < ApplicationRecord
    belongs_to :user
    belongs_to :apartment

    # only allow user to book each apartment once
    validates :user, uniqueness: { scope: :apartment,
        message: "apartment is already booked"}
end
