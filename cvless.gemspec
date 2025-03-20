# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "cvless"
  spec.version       = "2.4.0"
  spec.authors       = ["ritwiksaraf"]
  spec.email         = ["saraf.ritwik@gmail.com"]

  spec.summary       = "ritwiks portfolio "
  spec.homepage      = "https://github.com/ritwiksaraf.github.io/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "github-pages", "~> 232"
  spec.add_runtime_dependency "jekyll-paginate-v2", "~> 3.0"
end
