module ApplicationHelper
  def flash_class(name)
    case name
    when 'notice' then 'alert alert-info text-center'
    when 'success' then 'alert alert-success alert-dismissable text-center'
    when 'error', 'alert', 'danger' then 'alert alert-danger alert-dismissable text-center'
    else
      'alert alert-primary'
    end
  end
end
