require 'rack/jekyll'
require 'yaml'
require 'rack/ssl'
use Rack::SSL
run Rack::Jekyll.new
