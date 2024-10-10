module ApplicationHelper
  def turbo_notification_classes(type)
    case type
    when :notice
      'bg-notice text-notice-text border-notice-border'
    when :alert
      'bg-alert text-alert-text border-alert-border'
    when :error
      'bg-error text-error-text border-error-border'
    else
      'bg-notice text-notice-text border-notice-border'
    end
  end
end
