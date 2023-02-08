export default defineEventHandler(async (event) => {

  // handle query params
  // const { name } = useQuery(event)

  // handle post data
  // const { age } = await useBody(event)

  // return {
  // message: `Hello, ${name}! You are ${age} years old.`
  // }

  // api call with private key
  const { data } = await $fetch('https://api.apilayer.com/currency_data/list?apiKey=i2jnTljLviOf6mTX8ro7oxyZhEkZbMzK')

  return data
})