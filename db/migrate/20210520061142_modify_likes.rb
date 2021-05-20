class ModifyLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :likeable_type_id, :integer 
  end
end
