class CreateInteriors < ActiveRecord::Migration[6.1]
  def change
    create_table :interiors do |t|
      t.string :image
      t.integer :apartment_id
    end
  end
end
