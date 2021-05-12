class Modifyuserfields < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :location, :string
    add_column :users, :zipcode, :integer
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :users, :title, :string
    add_column :users, :industry, :string
    add_column :users, :company, :string
    add_index :users, :fname
    add_index :users, :lname
  end

end
