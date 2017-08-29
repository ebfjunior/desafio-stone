class Livro < ApplicationRecord
  has_attached_file :foto, styles: { medium: "300x200", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :foto, content_type: /\Aimage\/.*\z/

  def foto_url
    Rails.env.eql?("development") ? ("http://localhost:3000" + self.foto.url(:medium).split("?").first) : "http://" + self.foto.url(:medium)[2..-1]
  end


  def foto_url_original
    Rails.env.eql?("development") ? ("http://localhost:3000" + self.foto.url(:original).split("?").first) : "http://" + self.foto.url(:original)[2..-1]
  end
end
