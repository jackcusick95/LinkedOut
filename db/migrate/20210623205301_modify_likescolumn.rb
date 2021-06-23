class ModifyLikescolumn < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :liker_id 
    add_index :likes, [:likeable_id, :liker_id], unique: true 
  end
end
