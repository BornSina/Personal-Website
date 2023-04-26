import { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/rest";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }

  const owner = process.env.GH_USER;
  if (!owner) {
    res.status(400).json({
      error: "Missing github user in environment variables",
    });
    return;
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GH_TOKEN,
    });

    const repos: string[] = [
      "Personal-Website",
      "Circuit-Breaker-Simulator",
      "Holy-Sheet",
    ];
    const reposData = await Promise.all(
      repos.map((repo) =>
        octokit.rest.repos.get({ owner, repo }).then((res) => {
          return {
            name: res.data.name,
            description: res.data.description,
            url: res.data.html_url,
            stars: res.data.stargazers_count,
            forks: res.data.forks_count,
          };
        })
      )
    );

    res.status(200).json(reposData);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the repo data" });
  }
};

export default handler;
