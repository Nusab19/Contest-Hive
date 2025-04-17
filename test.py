import asyncio
import aiohttp

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()

async def fetch_multiple(session, url, num_requests=100):
    tasks = [fetch(session, url) for _ in range(num_requests)]
    responses = await asyncio.gather(*tasks)
    return responses

async def main():
    url = "https://contest-hive.vercel.app/api/1"  # Replace with your target URL
    async with aiohttp.ClientSession() as session:
        while True:
            responses = await fetch_multiple(session, url)
            print(f"Fetched {len(responses)} responses")

# Run the async main function
loop = asyncio.get_event_loop()
loop.run_until_complete(main())
