class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :details, :main_image
  
  has_many :interiors
end
