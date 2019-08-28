class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  before_save { author.squish!.downcase!}
  validates :content, presence: true
  validates_with NameValidator, field_name: 'author'
end
