class AddIdeasTags < ActiveRecord::Migration[5.1]
  def change
    create_table :ideas_tags, id: false do |t|
      t.belongs_to :idea, index: true
      t.belongs_to :tag, index: true
    end
  end
end
