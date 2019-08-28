class Category < ApplicationRecord
  has_many :comments, as: :commentable, dependent: :destroy
  has_many :posts, dependent: :destroy
  before_save { name.squish!.downcase! }
  validates_with NameValidator, field_name: 'name'
end
