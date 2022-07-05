export default async function getGreetingsFromApi() {
  const endpoint = '/api/greetings';

  const response = await fetch(endpoint);
  if (response.status !== 200) {
    throw new Error('Can not fetch the greetings with the provided Endpoint');
  }
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Can not get JSON from the response');
  }
}
