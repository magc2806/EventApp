class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.boolean :archive, default: false
      t.boolean :public, default: false
      t.string :name, null: false
      t.text :description, null: false
      t.date :event_date, null: false
      t.references :organizer, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
