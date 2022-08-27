require 'pry'

def check_if_user_gave_input
  abort("mkdir: missing input, you need to give the name of the folder you wanna create") if ARGV.empty?
end

def create_new_folder(folder)
  system("mkdir /home/sam/THP/#{folder}")
end

def git_init
  system("git init")
end

def create_gem_file
  system("touch Gemfile")
  file = File.open("Gemfile", "w")
  file.puts("source 'https://rubygems.org'") 
  file.puts("ruby '2.7.4'") 
  file.puts("gem 'rspec'") 
  file.puts("gem 'pry'") 
  file.puts("gem 'rubocop'") 
  file.puts("gem 'nokogiri'") 
  file.close
  system("bundle install")
end

def create_env
  system("touch .env") 
  system("touch .gitignore")
  file = File.open(".gitignore", "w")
  file.puts(".env")
  file.close
end

def init_rspec
  system("rspec --init")
end

def create_readme
  system("touch README.md")
  file = File.open("README.md", "w")
  file.puts("This is a Ruby Project made by Samsou1 on Github for academic purposes only")
  file.close
end

def create_lib_and_spec
  system("mkdir lib")
  system("mkdir spec")
end

def init
  check_if_user_gave_input
  folder_name = ARGV.join("_").to_s
  create_new_folder(folder_name)
  Dir.chdir("/home/sam/THP/#{folder_name}")
  git_init
  create_gem_file
  create_env
  create_readme
  create_lib_and_spec
  init_rspec
end

init
