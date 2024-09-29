# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  archive     :boolean          default(FALSE)
#  public      :boolean          default(FALSE)
#  name        :string           not null
#  description :text             not null
#  event_date  :date             not null
#  manager_id  :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
