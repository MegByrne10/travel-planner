class TripSerializer
  include JSONAPI::Serializer
  attributes :id, :title, :description, :start_date, :end_date
end