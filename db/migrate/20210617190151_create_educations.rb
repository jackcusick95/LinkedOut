class CreateEducations < ActiveRecord::Migration[5.2]
  def change
    create_table :educations do |t|
      t.integer :user_id, null: false
      t.string :school, null: false
      t.string :degree
      t.string :field
      t.string :description
      t.string :start_date, null: false
      t.string :end_date, null: false 
      t.timestamps 
    end
    add_index :educations, :user_id
  end
end
