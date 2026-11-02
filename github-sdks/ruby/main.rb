require 'octokit'

client = Octokit::Client.new(
  access_token: ENV['GITHUB_TOKEN']
)

repo = "HoussemEddineChaouch-colla/Github-Examples"
new_branch_name = "sdks"
base_branch = "main"

# 1. Get the latest commit SHA from main
sha_latest_commit = client.commits(repo, base_branch).first.sha

# 2. Create the branch
client.create_ref(
  repo,
  "refs/heads/#{new_branch_name}",
  sha_latest_commit
)

puts "Branch #{new_branch_name} created successfully!"