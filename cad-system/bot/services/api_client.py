import os
import aiohttp
from dotenv import load_dotenv

load_dotenv()

API_URL = os.getenv("API_URL")
API_KEY = os.getenv("API_KEY")


HEADERS = {
    "x-api-key": API_KEY
}


async def api_post(endpoint: str, data: dict):

    async with aiohttp.ClientSession(headers=HEADERS) as session:

        async with session.post(
            f"{API_URL}{endpoint}",
            json=data
        ) as response:

            if response.status >= 400:
                raise Exception(await response.text())

            return await response.json()


async def api_get(endpoint: str):

    async with aiohttp.ClientSession(headers=HEADERS) as session:

        async with session.get(
            f"{API_URL}{endpoint}"
        ) as response:

            if response.status >= 400:
                raise Exception(await response.text())

            return await response.json()