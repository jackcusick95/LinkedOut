class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :job_type
      t.string :company, null: false
      t.string :location
      t.string :start_date, null: false
      t.string :end_date, null: false 
      t.string :description
      t.timestamps 
    end
    add_index :jobs, :user_id
  end
end
