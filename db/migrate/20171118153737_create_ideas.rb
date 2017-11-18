class CreateIdeas < ActiveRecord::Migration[5.1]
  def change
    create_table :ideas do |t|
      t.string :title
      t.text :desc_short
      t.text :desc_long
      t.references :user, foreign_key: true, optional: true
      t.integer :status

      t.timestamps
    end
  end
end
