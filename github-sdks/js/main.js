import { Octokit } from "octokit";

const client = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const repo = "HoussemEddineChaouch-colla/Github-Examples";
const newBranchName = "sdks";
const baseBranch = "main";

async function createBranch() {
  // 1. Get the latest commit from main
  const { data: commit } = await client.rest.repos.getBranch({
    owner: "HoussemEddineChaouch-colla",
    repo: "Github-Examples",
    branch: baseBranch,
  });

  const shaLatestCommit = commit.commit.sha;

  // 2. Create the new branch
  await client.rest.git.createRef({
    owner: "HoussemEddineChaouch-colla",
    repo: "Github-Examples",
    ref: `refs/heads/${newBranchName}`,
    sha: shaLatestCommit,
  });

  console.log(`Branch ${newBranchName} created successfully!`);
}

createBranch().catch(console.error);