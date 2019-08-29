class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
  before_save { author.squish!.downcase!}
  validates :content, presence: true
  validates_with NameValidator, field_name: 'author'
  after_create_commit { SendMesaggeJob.perform_later(self.commentable_type) }
end
