class Post < ApplicationRecord
  before_save { name.downcase! }
  validates_with NameValidator, field_name: 'name'
  mount_uploader :file, FileUploader
end
