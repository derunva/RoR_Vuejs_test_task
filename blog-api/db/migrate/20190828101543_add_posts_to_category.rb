class AddPostsToCategory < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :category, index: true
  end
end
