# == Schema Information
#
# Table name: events
#
#  id             :bigint           not null, primary key
#  archive        :boolean          default(FALSE)
#  public         :boolean          default(FALSE)
#  name           :string           not null
#  description    :text             not null
#  event_date     :date             not null
#  organizer_id   :bigint           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Event < ApplicationRecord
  belongs_to :organizer, foreign_key: :organizer_id, class_name: 'User'
  validates :name, :description, :event_date, presence: :true
end
