class Category < ApplicationRecord
  before_save { name.downcase! }
  validates_with NameValidator, field_name: 'name'
end
