class SendMesaggeJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast "comment_update_channel", message: message
  end
end
