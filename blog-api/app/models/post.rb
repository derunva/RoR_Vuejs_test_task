class Post < ApplicationRecord
  belongs_to :category
  has_many :comments, as: :commentable, dependent: :destroy
  before_save { name.squish!.downcase! }
  validates_with NameValidator, field_name: 'name'
  mount_uploader :file, FileUploader
end
