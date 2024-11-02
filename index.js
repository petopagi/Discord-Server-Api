const axios = require('axios')

const discordMembers = async ({ server }) => {
  try {
    const apiResult = await axios({
      method: 'get',
      url: `https://discord.com/api/v9/invites/${server}?with_counts=true&with_expiration=true`
    })
    console.log(apiResult)
  } catch (err) {
    console.log(err)
  }
}

discordMembers({ server: 'hagobuy' })