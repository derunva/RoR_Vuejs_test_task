class Category < ApplicationRecord
  before_save { name.downcase!.squish! }
  validates_with NameValidator, field_name: 'name'
end
