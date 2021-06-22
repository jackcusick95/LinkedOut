class ModifyLikesindex < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :likeable_id 
    remove_index :likes, :likeable_type 
  end
end
