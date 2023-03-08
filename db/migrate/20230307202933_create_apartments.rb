class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :title
      t.string :location
      t.string :details
      t.string :main_image

      t.timestamps
    end
  end
end
