require 'rack/jekyll'
require 'yaml'
require 'rack/rewrite'

use Rack::Rewrite do
  if ENV['RACK_ENV'] == 'production'
    r301 %r{.*}, 'https://kubo-health-marketing.herokuapp.com$&', :scheme => 'http'
  end
end

run Rack::Jekyll.new
