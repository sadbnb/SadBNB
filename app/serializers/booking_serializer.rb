class BookingSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date

  belongs_to :apartment
end
