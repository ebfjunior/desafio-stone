class AddAttachmentFotoToLivros < ActiveRecord::Migration
  def self.up
    change_table :livros do |t|
      t.attachment :foto
    end
  end

  def self.down
    remove_attachment :livros, :foto
  end
end
