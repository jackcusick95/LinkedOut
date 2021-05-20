class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :likeable_id, null: false 
      t.string :likeable_type, null: false 
      t.timestamps
    end
    add_index :likes, :liker_id, unique: true
    add_index :likes, :likeable_id, unique: true
    add_index :likes, :likeable_type, unique: true 
  end
end
