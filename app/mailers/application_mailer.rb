class ApplicationMailer < ActionMailer::Base
  default from: Rails.application.credentials.dig(:mailgun, :from_email)
  layout "mailer"
end
