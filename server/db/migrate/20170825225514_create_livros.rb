class CreateLivros < ActiveRecord::Migration[5.0]
  def change
    create_table :livros do |t|
      t.string :nome
      t.text :descricao
      t.float :valor

      t.timestamps
    end
  end
end
