// pages/api/repo.ts
import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Validate the request method
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const owner = process.env.GITHUB_USER;
  if (!owner) {
    res.status(400).json({
      error: "Missing github user in environment variables",
    });
    return;
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_ACCESS_TOKEN,
    });

    const { data } = await octokit.rest.repos.listForUser({
      username: owner,
      type: "owner",
      sort: "updated",
      direction: "desc",
      per_page: 100,
    });

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the repo data" });
  }
};

export default handler;
