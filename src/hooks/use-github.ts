import useSWR from "swr"

interface GitHubRepo {
  stargazers_count: number
}

async function fetchGithubStars(username: string): Promise<number> {
  let page = 1
  let totalStars = 0
  let hasMore = true

  while (hasMore) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
    )

    if (!response.ok) {
      throw new Error("Failed to fetch repos")
    }

    const repos: GitHubRepo[] = await response.json()
    totalStars += repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)

    hasMore = repos.length === 100 // GitHub paginates repos in batches of 100
    page++
  }

  return totalStars
}

export function useGithubStars(username: string) {
  const { data, isLoading, error } = useSWR(
    ["github-stars", username],
    ([, username]) => fetchGithubStars(username),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )

  return {
    stargazersCount: data ?? 0,
    isLoading,
    error: error as Error | null,
  }
}
