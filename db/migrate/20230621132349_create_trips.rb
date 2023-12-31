class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :title, null: false
      t.text :description
      t.date :start_date
      t.date :end_date

      t.timestamps
    end
  end
end
