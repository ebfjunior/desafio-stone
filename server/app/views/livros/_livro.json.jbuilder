json.extract! livro, :id, :nome, :descricao, :valor, :created_at, :updated_at
json.url livro_url(livro, format: :json)
