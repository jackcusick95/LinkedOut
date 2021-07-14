class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.integer :connecter_id, null: false
      t.integer :connected_id, null: false
      t.timestamps
    end
    add_index :connections, [:connected_id, :connecter_id], unique: true 
  end
end
