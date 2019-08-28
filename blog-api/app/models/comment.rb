class Comment < ApplicationRecord
  before_save { author.downcase! }
  validates :content, presence: true
  validates_with NameValidator, field_name: 'author'
end
